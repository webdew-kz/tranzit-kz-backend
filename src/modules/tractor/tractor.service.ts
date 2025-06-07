/** @format */

import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTractorDto } from "./dto/create-tractor.dto";
import { UpdateTractorDto } from "./dto/update-tractor.dto";
import { FilterTractorDto } from "./dto/filter-tractor.dto";
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";
import { deleteFile } from "src/utils/delete-file";

sharp.cache(false);

@Injectable()
export class TractorService {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        dto: CreateTractorDto,
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

                photoPaths.push(`/uploads/tractors/resized-${name}.webp`);

                await deleteFile(filePath);
            }
        } else {
            throw new BadRequestException(
                "Необходимо загрузить хотя бы одно фото тягача"
            );
        }

        const data = {
            ...dto,
            price: Number(dto.price),
            year: Number(dto.year),
            mileage: Number(dto.year),
            volumeEngine: Number(dto.volumeEngine),
            powerEngine: Number(dto.powerEngine),
            photos: photoPaths, // ← это уже строки, как нужно
        };

        const views = await this.prisma.views.create({
            data: {},
        });

        const tractor = await this.prisma.trade.create({
            data: {
                ...data,
                userId,
                viewsId: views.id,
            },
        });

        return {
            tractor,
            message: "Тягач успешно создан",
        };
    }

    async createCopy(
        dto: CreateTractorDto,
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
                const newRelativePath = `/uploads/tractors/${newFileName}`;
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

                photoPaths.push(`/uploads/tractors/resized-${name}.webp`);

                await deleteFile(filePath); // удаляем оригинал
            }
        }

        // Если вообще нет фото — ошибка
        if (photoPaths.length === 0) {
            throw new BadRequestException(
                "Необходимо загрузить хотя бы одно фото тягача"
            );
        }

        const data = {
            ...cleanDto,
            price: Number(dto.price),
            year: Number(dto.year),
            mileage: Number(dto.year),
            volumeEngine: Number(dto.volumeEngine),
            powerEngine: Number(dto.powerEngine),
            photos: photoPaths,
        };

        const views = await this.prisma.views.create({ data: {} });

        const tractor = await this.prisma.trade.create({
            data: {
                ...data,
                userId,
                viewsId: views.id,
            },
        });

        return {
            tractor,
            message: "Тягач успешно создан",
        };
    }

    async update(
        dto: UpdateTractorDto,
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

                photoPaths.push(`/uploads/tractors/resized-${name}.webp`);

                await deleteFile(filePath);
            }
        }

        const data: any = {
            ...cleanDto,
            price: Number(dto.price),
            year: Number(dto.year),
            mileage: Number(dto.year),
            volumeEngine: Number(dto.volumeEngine),
            powerEngine: Number(dto.powerEngine),
            ...(photoPaths.length ? { photos: photoPaths } : { photos: [] }),
        };

        const tractor = await this.prisma.trade.update({
            where: { id },
            data,
        });

        return {
            tractor,
            message: "Тягач успешно обновлен",
        };
    }

    async delete(id: string) {
        const tractor = await this.prisma.trade.findUnique({
            where: { id },
            select: { photos: true },
        });

        if (tractor?.photos && tractor.photos.length > 0) {
            for (const photo of tractor.photos) {
                const filePath = path.join(process.cwd(), photo);

                await deleteFile(filePath);
            }
        }

        await this.prisma.trade.delete({
            where: { id },
        });

        return { message: "Тягач успешно удален" };
    }

    async findById(id: string) {
        const tractor = await this.prisma.trade.findUnique({
            where: { id },
            include: {
                user: true,
                views: true,
            },
        });

        if (!tractor) {
            throw new NotFoundException("Тягач не найден");
        }

        return {
            tractor,
        };
    }

    async findAllActiveByUserId(userId: string, page = 1, perPage = 5) {
        const tractors = await this.prisma.trade.findMany({
            where: {
                userId,
                variant: "TRACTOR",
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

        if (!tractors.length) {
            return { message: "Тягачи не найдены", tractors: [] };
        }

        return {
            tractors,
            message: `Найдено ${tractors.length} тягачов`,
        };
    }

    async findAllArchivedByUserId(userId: string, page = 1, perPage = 5) {
        const tractors = await this.prisma.trade.findMany({
            where: {
                userId,
                variant: "TRACTOR",
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

        if (!tractors.length) {
            return { message: "Тягачи не найдены", tractors: [] };
        }

        return {
            tractors,
            message: `Найдено ${tractors.length} тягачов`,
        };
    }

    async findAll(page = 1, perPage = 5) {
        const currentPage = Math.max(1, Number(page));
        const limit = Math.max(1, Number(perPage));
        const offset = (currentPage - 1) * limit;

        const [tractors, total] = await this.prisma.$transaction([
            this.prisma.trade.findMany({
                where: {
                    variant: "TRACTOR",
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
                    variant: "TRACTOR",
                    isArchived: false,
                },
            }),
        ]);

        return {
            tractors,
            hasMore: currentPage * limit < total,
            total,
        };
    }

    async archivate(id: string) {
        const tractor = await this.prisma.trade.update({
            where: { id },
            data: { isArchived: true },
        });

        if (!tractor) {
            throw new NotFoundException("Тягач не найден");
        }

        return {
            tractor,
            message: "Тягач успешно архивирован",
        };
    }

    async activate(id: string) {
        const oldTractor = await this.prisma.trade.update({
            where: { id },
            data: { isArchived: false },
        });

        if (!oldTractor) {
            throw new NotFoundException("Тягач не найден");
        }

        const tractor = await this.prisma.trade.findUnique({
            where: { id },
            include: {
                user: true,
                views: true,
            },
        });

        return {
            tractor,
            message: "Тягач успешно активирован",
        };
    }

    async removeMany(ids: string[]) {
        const tractors = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (!tractors.length) {
            throw new NotFoundException("Тягачи не найдены");
        }

        for (const tractor of tractors) {
            if (tractor.photos?.length) {
                for (const photo of tractor.photos) {
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
            message: "Тягачи успешно удалены",
        };
    }

    async archivateMany(ids: string[]) {
        const tractors = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (tractors.length === 0) {
            throw new NotFoundException("Тягачи не найдены");
        }

        await this.prisma.trade.updateMany({
            where: { id: { in: ids } },
            data: { isArchived: true },
        });

        return {
            message: "Тягачи успешно архивированы",
        };
    }

    async activateMany(ids: string[]) {
        const existsTractors = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (existsTractors.length === 0) {
            throw new NotFoundException("Тягачи не найдены");
        }

        await this.prisma.trade.updateMany({
            where: { id: { in: ids } },
            data: { isArchived: false },
        });

        const tractors = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
            include: {
                user: true,
                views: true,
            },
        });

        return {
            tractors,
            message: "Тягачи успешно активированы",
        };
    }

    async addView(id: string) {
        const tractor = await this.prisma.trade.findUnique({
            where: { id },
            select: { viewsId: true },
        });

        if (!tractor?.viewsId) {
            throw new Error("Views не привязан к Trade");
        }

        // 2. Увеличиваем счётчик
        await this.prisma.views.update({
            where: { id: tractor.viewsId },
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
                "Не указаны id тягача или пользователя"
            );
        }

        const wishTractor = await this.prisma.wishList.findUnique({
            where: {
                userId_tradeId: {
                    userId,
                    tradeId,
                },
            },
        });

        if (wishTractor) {
            await this.removeFromWishlist(userId, tradeId);
        }

        await this.prisma.wishList.create({
            data: {
                tradeId,
                userId,
            },
        });

        return { message: "Тягач добавлен в избранное" };
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

        return { message: "Тягач удален из избранного" };
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

        return { message: "Все тягачи удалены из избранного" };
    }

    async getWishlist(userId: string) {
        const tractors = await this.prisma.wishList.findMany({
            where: {
                userId,
                tradeId: { not: null },
                trade: {
                    variant: "TRACTOR",
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

        if (!tractors.length) {
            return { tractors: [], message: "Грузы не найдены в избранном" };
        }

        // Возвращаем только массив trade
        return {
            tractors: tractors.map((item) => item.trade),
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

    async findByFilter(dto: FilterTractorDto) {
        const {
            city,
            tractorBrand,
            typeCabin,
            cabinSuspension,
            typeEngine,
            status,
            exist,
            drive,
            transmission,
            steering,
            tractorWheel,
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
            variant: "TRACTOR",
            ...(city && { city }),
            ...(tractorBrand && { tractorBrand }),
            ...(typeCabin && { typeCabin }),
            ...(cabinSuspension && { cabinSuspension }),
            ...(typeEngine && { typeEngine }),
            ...(status && { status }),
            ...(exist && { exist }),
            ...(drive && { drive }),
            ...(transmission && { transmission }),
            ...(steering && { steering }),
            ...(tractorWheel && { tractorWheel }),
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

        const tractors = await this.prisma.trade.findMany({
            where,
            orderBy: {
                updatedAt: "desc",
            },
            include: {
                user: true,
                views: true,
            },
        });

        if (!tractors.length) {
            return {
                tractors: [],
                message: "По вашему запросу тягачи не найдены",
            };
        }

        return {
            tractors,
            message: `Найдено тягачей: ${tractors.length}`,
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
