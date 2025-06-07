/** @format */

import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTrailerDto } from "./dto/create-trailer.dto";
import { UpdateTrailerDto } from "./dto/update-trailer.dto";
import { FilterTrailerDto } from "./dto/filter-trailer.dto";
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";
import { deleteFile } from "src/utils/delete-file";

sharp.cache(false);

@Injectable()
export class TrailerService {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        dto: CreateTrailerDto,
        userId: string,
        files: { photos?: Express.Multer.File[] }
    ) {
        const photoPaths: string[] = [];

        if (files?.photos?.length) {
            for (const file of files.photos) {
                const filePath = path.join(file.destination, file.filename);
                const { name, dir } = path.parse(filePath);
                const resizedPath = path.join(dir, `resized-${name}.webp`);

                await sharp(filePath)
                    .resize({ width: 600 })
                    .toFormat("webp", { quality: 50 }) // это достаточно
                    .toFile(resizedPath);

                photoPaths.push(`/uploads/trailers/resized-${name}.webp`);

                await deleteFile(filePath);
            }
        } else {
            throw new BadRequestException(
                "Необходимо загрузить хотя бы одно фото прицепа"
            );
        }

        const data = {
            ...dto,
            price: Number(dto.price),
            year: Number(dto.year),
            weight: Number(dto.year),
            photos: photoPaths, // ← это уже строки, как нужно
        };

        const views = await this.prisma.views.create({
            data: {},
        });

        const trailer = await this.prisma.trade.create({
            data: {
                ...data,
                variant: "TRAILER",
                userId,
                viewsId: views.id,
            },
        });

        return {
            trailer,
            message: "Прицеп успешно добавлен",
        };
    }

    async createCopy(
        dto: CreateTrailerDto,
        userId: string,
        files: { photos?: Express.Multer.File[] }
    ) {
        let oldPhotos: string[] = [];

        // Приводим oldPhotos к массиву строк
        if (Array.isArray(dto.oldPhotos)) {
            oldPhotos = dto.oldPhotos;
        } else if (typeof dto.oldPhotos === "string") {
            oldPhotos = [dto.oldPhotos];
        }

        const { oldPhotos: _, ...cleanDto } = dto;
        const photoPaths: string[] = [];

        // Копируем старые фото
        for (const oldPhotoPath of oldPhotos) {
            try {
                const absoluteOldPath = path.join(process.cwd(), oldPhotoPath);
                const { name } = path.parse(oldPhotoPath);
                const timestamp = Date.now();
                const newFileName = `${name}-${timestamp}.webp`;
                const newRelativePath = `/uploads/trailers/${newFileName}`;
                const newAbsolutePath = path.join(
                    process.cwd(),
                    newRelativePath
                );

                await fs.promises.copyFile(absoluteOldPath, newAbsolutePath);
                photoPaths.push(newRelativePath);
            } catch (err) {
                console.warn(
                    `⚠️ Не удалось скопировать файл: ${oldPhotoPath}`,
                    err
                );
            }
        }

        // Обрабатываем новые загруженные фото
        if (files?.photos?.length) {
            for (const file of files.photos) {
                const filePath = path.join(file.destination, file.filename);
                const { name, dir } = path.parse(filePath);
                const resizedPath = path.join(dir, `resized-${name}.webp`);

                await sharp(filePath)
                    .resize({ width: 600 })
                    .toFormat("webp", { quality: 50 })
                    .toFile(resizedPath);

                photoPaths.push(`/uploads/trailers/resized-${name}.webp`);

                await deleteFile(filePath); // удаляем оригинал
            }
        }

        // Если вообще нет фото — ошибка
        if (photoPaths.length === 0) {
            throw new BadRequestException(
                "Необходимо загрузить хотя бы одно фото прицепа"
            );
        }

        const data = {
            ...cleanDto,
            photos: photoPaths,
        };

        const views = await this.prisma.views.create({ data: {} });

        const trailer = await this.prisma.trade.create({
            data: {
                ...data,
                variant: "TRAILER",
                userId,
                viewsId: views.id,
            },
        });

        return {
            trailer,
            message: "Прицеп успешно добавлен",
        };
    }

    async update(
        dto: UpdateTrailerDto,
        id: string,
        files?: { photos?: Express.Multer.File[] }
    ) {
        let oldPhotos: string[] = [];

        if (Array.isArray(dto.oldPhotos)) {
            oldPhotos = dto.oldPhotos;
        } else if (typeof dto.oldPhotos === "string") {
            oldPhotos = [dto.oldPhotos];
        }

        const { oldPhotos: _, ...cleanDto } = dto;
        const photoPaths: string[] = [...oldPhotos];

        if (files?.photos?.length) {
            for (const file of files.photos) {
                const filePath = path.join(file.destination, file.filename);
                const { name, dir } = path.parse(filePath);
                const resizedPath = path.join(dir, `resized-${name}.webp`);

                await sharp(filePath)
                    .resize({ width: 600 })
                    .toFormat("webp", { quality: 50 })
                    .toFile(resizedPath);

                photoPaths.push(`/uploads/trailers/resized-${name}.webp`);

                await deleteFile(filePath);
            }
        }

        const data: any = {
            ...cleanDto,
            ...(photoPaths.length ? { photos: photoPaths } : { photos: [] }),
        };

        const trailer = await this.prisma.trade.update({
            where: { id },
            data,
        });

        return {
            trailer,
            message: "Прицеп успешно обновлен",
        };
    }

    async delete(id: string) {
        const trailer = await this.prisma.trade.findUnique({
            where: { id },
            select: { photos: true },
        });

        if (trailer?.photos && trailer.photos.length > 0) {
            for (const photo of trailer.photos) {
                const filePath = path.join(process.cwd(), photo);

                await deleteFile(filePath);
            }
        }

        await this.prisma.trade.delete({
            where: { id },
        });

        return { message: "Прицеп успешно удален" };
    }

    async findById(id: string) {
        const trailer = await this.prisma.trade.findUnique({
            where: { id },
            include: {
                user: true,
                views: true,
            },
        });

        if (!trailer) {
            throw new NotFoundException("Прицеп не найден");
        }

        return {
            trailer,
        };
    }

    async findAllActiveByUserId(userId: string, page = 1, perPage = 5) {
        const trailers = await this.prisma.trade.findMany({
            where: {
                variant: "TRAILER",
                userId,
                isArchived: false,
            },
            orderBy: {
                updatedAt: "desc",
            },
            include: {
                views: true,
                user: true,
            },
        });

        if (!trailers.length) {
            return { message: "Прицепы не найдены", trailers: [] };
        }

        return {
            trailers,
            message: `Найдено прицепов: ${trailers.length} `,
        };
    }

    async findAllArchivedByUserId(userId: string, page = 1, perPage = 5) {
        const trailers = await this.prisma.trade.findMany({
            where: {
                variant: "TRAILER",
                userId,
                isArchived: true,
            },
            orderBy: {
                updatedAt: "desc",
            },
            include: {
                views: true,
                user: true,
            },
        });

        if (!trailers.length) {
            return { message: "Прицепы не найдены", trailers: [] };
        }

        return {
            trailers,
            message: `Найдено прицепов: ${trailers.length} `,
        };
    }

    async findAll(page = 1, perPage = 5) {
        const currentPage = Math.max(1, Number(page));
        const limit = Math.max(1, Number(perPage));
        const offset = (currentPage - 1) * limit;

        const [trailers, total] = await this.prisma.$transaction([
            this.prisma.trade.findMany({
                where: {
                    variant: "TRAILER",
                    isArchived: false,
                },
                orderBy: {
                    updatedAt: "desc",
                },
                skip: offset,
                take: limit,
                include: {
                    views: true,
                },
            }),
            this.prisma.trade.count({
                where: {
                    variant: "TRAILER",
                    isArchived: false,
                },
            }),
        ]);

        return {
            trailers,
            hasMore: currentPage * limit < total,
            total,
        };
    }

    async archivate(id: string) {
        const trailer = await this.prisma.trade.update({
            where: { id },
            data: { isArchived: true },
        });

        if (!trailer) {
            throw new NotFoundException("Прицеп не найден");
        }

        return {
            trailer,
            message: "Прицеп успешно архивирован",
        };
    }

    async activate(id: string) {
        const oldTrailer = await this.prisma.trade.update({
            where: { id },
            data: { isArchived: false },
        });

        if (!oldTrailer) {
            throw new NotFoundException("Прицеп не найден");
        }

        const trailer = await this.prisma.trade.findUnique({
            where: { id },
            include: {
                user: true,
                views: true,
            },
        });

        return {
            trailer,
            message: "Прицеп успешно активирован",
        };
    }

    async removeMany(ids: string[]) {
        const trailers = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (!trailers.length) {
            throw new NotFoundException("Прицепы не найдены");
        }

        for (const trailer of trailers) {
            if (trailer.photos?.length) {
                for (const photo of trailer.photos) {
                    const filePath = path.join(process.cwd(), photo);
                    try {
                        await deleteFile(filePath);
                    } catch (err) {
                        console.warn(
                            `⚠️ Не удалось удалить файл ${filePath}`,
                            err
                        );
                    }
                }
            }
        }

        await this.prisma.trade.deleteMany({
            where: { id: { in: ids } },
        });

        return {
            message: "Прицепы успешно удалены",
        };
    }

    async archivateMany(ids: string[]) {
        const trailers = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (trailers.length === 0) {
            throw new NotFoundException("Прицепы не найдены");
        }

        await this.prisma.trade.updateMany({
            where: { id: { in: ids } },
            data: { isArchived: true },
        });

        return {
            message: "Прицепы успешно архивированы",
        };
    }

    async activateMany(ids: string[]) {
        const existsTrailers = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (existsTrailers.length === 0) {
            throw new NotFoundException("Прицепы не найдены");
        }

        await this.prisma.trade.updateMany({
            where: { id: { in: ids } },
            data: { isArchived: false },
        });

        const trailers = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
            include: {
                user: true,
                views: true,
            },
        });

        return {
            trailers,
            message: "Прицепы успешно активированы",
        };
    }

    async addView(id: string) {
        const trailer = await this.prisma.trade.findUnique({
            where: { id },
            select: { viewsId: true },
        });

        if (!trailer?.viewsId) {
            throw new Error("Views не привязан к Trade");
        }

        // 2. Увеличиваем счётчик
        await this.prisma.views.update({
            where: { id: trailer.viewsId },
            data: {
                count: {
                    increment: 1,
                },
            },
        });

        return { message: "Просмотр добавлен" };
    }

    async addToWishlist(userId: string, tradeId: string) {
        if (!tradeId || !userId) {
            throw new BadRequestException(
                "Не указаны id прицепа или пользователя"
            );
        }

        const wishTrailer = await this.prisma.wishList.findUnique({
            where: {
                userId_tradeId: {
                    userId,
                    tradeId,
                },
            },
        });

        if (wishTrailer) {
            await this.removeFromWishlist(userId, tradeId);
        }

        await this.prisma.wishList.create({
            data: {
                tradeId,
                userId,
            },
        });

        return { message: "Прицеп добавлен в избранное" };
    }

    async removeFromWishlist(userId: string, tradeId: string) {
        const wishListItem = await this.prisma.wishList.findUnique({
            where: {
                userId_tradeId: {
                    userId,
                    tradeId,
                },
            },
        });

        if (!wishListItem) {
            await this.addToWishlist(userId, tradeId);
        }

        await this.prisma.wishList.delete({
            where: {
                userId_tradeId: {
                    userId,
                    tradeId,
                },
            },
        });

        return { message: "Прицеп удален из избранного" };
    }

    async removeAllFromWishlist(userId: string) {
        await this.prisma.wishList.deleteMany({
            where: {
                userId,
                tradeId: {
                    not: null, // только записи, связанные с грузами
                },
            },
        });

        return { message: "Все прицепы удалены из избранного" };
    }

    async getWishlist(userId: string) {
        const trailers = await this.prisma.wishList.findMany({
            where: {
                userId,
                tradeId: { not: null },
                trade: {
                    variant: "TRAILER",
                },
            },
            include: {
                trade: {
                    include: {
                        user: true,
                        views: true,
                    },
                },
            },
        });

        if (!trailers.length) {
            return { trailers: [], message: "Прицепы не найдены в избранном" };
        }

        // Возвращаем только массив trade

        console.log("Wishlist trailers:", trailers);

        return {
            trailers: trailers.map((item) => item.trade),
        };
    }

    async isInWishlist(tradeId: string, userId: string) {
        const wishListItem = await this.prisma.wishList.findFirst({
            where: {
                userId,
                tradeId,
            },
        });

        return !!wishListItem;
    }

    async findByFilter(dto: FilterTrailerDto) {
        const {
            city,
            trailerBrand,
            typeTechnic,
            typeTrailer,
            qtyAxis,
            typeSuspension,
            cabinSuspension,
            typeBrake,
            typeEngine,
            status,
            exist,
            drive,
            transmission,
            steering,
            minYear,
            maxYear,
            minPrice,
            maxPrice,
            minWeight,
            maxWeight,
            minMileage,
            maxMileage,
            minPowerEngine,
            maxPowerEngine,
            minVolumeEngine,
            maxVolumeEngine,
        } = dto;

        const where: any = {
            isArchived: false,
            variant: "TRAILER",
            ...(typeTechnic && { typeTechnic }),
            ...(typeTrailer && { typeTrailer }),
            ...(qtyAxis && { qtyAxis }),
            ...(typeSuspension && { typeSuspension }),
            ...(typeBrake && { typeBrake }),
            ...(city && { city }),
            ...(trailerBrand && { trailerBrand }),
            ...(cabinSuspension && { cabinSuspension }),
            ...(typeEngine && { typeEngine }),
            ...(status && { status }),
            ...(exist && { exist }),
            ...(drive && { drive }),
            ...(transmission && { transmission }),
            ...(steering && { steering }),
            ...(this.rangeFilter(minYear, maxYear) && {
                year: this.rangeFilter(minYear, maxYear),
            }),
            ...(this.rangeFilter(minPrice, maxPrice) && {
                price: this.rangeFilter(minPrice, maxPrice),
            }),
            ...(this.rangeFilter(minWeight, maxWeight) && {
                weight: this.rangeFilter(minWeight, maxWeight),
            }),
            ...(this.rangeFilter(minMileage, maxMileage) && {
                mileage: this.rangeFilter(minMileage, maxMileage),
            }),
            ...(this.rangeFilter(minPowerEngine, maxPowerEngine) && {
                powerEngine: this.rangeFilter(minPowerEngine, maxPowerEngine),
            }),
            ...(this.rangeFilter(minVolumeEngine, maxVolumeEngine) && {
                volumeEngine: this.rangeFilter(
                    minVolumeEngine,
                    maxVolumeEngine
                ),
            }),
        };

        const trailers = await this.prisma.trade.findMany({
            where,
            orderBy: {
                updatedAt: "desc",
            },
            include: {
                user: true,
                views: true,
            },
        });

        if (!trailers.length) {
            return {
                trailers: [],
                message: "По вашему запросу прицепы не найдены",
            };
        }

        return {
            trailers,
            message: `Найдено прицепов: ${trailers.length}`,
        };
    }

    private rangeFilter(min?: number, max?: number) {
        if (min !== undefined || max !== undefined) {
            return {
                ...(min !== undefined && { gte: min }),
                ...(max !== undefined && { lte: max }),
            };
        }
        return undefined;
    }
}
