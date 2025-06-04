/** @format */

import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTruckDto } from "./dto/create-truck.dto";
import { UpdateTruckDto } from "./dto/update-truck.dto";
import { FilterTruckDto } from "./dto/filter-truck.dto";
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";
import { deleteFile } from "src/utils/delete-file";

sharp.cache(false);

@Injectable()
export class TruckService {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        dto: CreateTruckDto,
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

                photoPaths.push(`/uploads/trucks/resized-${name}.webp`);

                await deleteFile(filePath);
            }
        } else {
            throw new BadRequestException(
                "Необходимо загрузить хотя бы одно фото грузовика"
            );
        }

        const data = {
            ...dto,
            photos: photoPaths, // ← это уже строки, как нужно
        };

        const views = await this.prisma.views.create({
            data: {},
        });

        const truck = await this.prisma.trade.create({
            data: {
                ...data,
                userId,
                viewsId: views.id,
            },
        });

        return {
            truck,
            message: "Грузовик успешно создан",
        };
    }

    async createCopy(
        dto: CreateTruckDto,
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
                const newRelativePath = `/uploads/trucks/${newFileName}`;
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

                photoPaths.push(`/uploads/trucks/resized-${name}.webp`);

                await deleteFile(filePath); // удаляем оригинал
            }
        }

        // Если вообще нет фото — ошибка
        if (photoPaths.length === 0) {
            throw new BadRequestException(
                "Необходимо загрузить хотя бы одно фото грузовика"
            );
        }

        const data = {
            ...cleanDto,
            photos: photoPaths,
        };

        const views = await this.prisma.views.create({ data: {} });

        const truck = await this.prisma.trade.create({
            data: {
                ...data,
                userId,
                viewsId: views.id,
            },
        });

        return {
            truck,
            message: "Грузовик успешно создан",
        };
    }

    async update(
        dto: UpdateTruckDto,
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

                photoPaths.push(`/uploads/trucks/resized-${name}.webp`);

                await deleteFile(filePath);
            }
        }

        const data: any = {
            ...cleanDto,
            ...(photoPaths.length ? { photos: photoPaths } : { photos: [] }),
        };

        const truck = await this.prisma.trade.update({
            where: { id },
            data,
        });

        return {
            truck,
            message: "Грузовик успешно обновлен",
        };
    }

    async delete(id: string) {
        const truck = await this.prisma.trade.findUnique({
            where: { id },
            select: { photos: true },
        });

        if (truck?.photos && truck.photos.length > 0) {
            for (const photo of truck.photos) {
                const filePath = path.join(process.cwd(), photo);

                await deleteFile(filePath);
            }
        }

        await this.prisma.trade.delete({
            where: { id },
        });

        return { message: "Грузовик успешно удален" };
    }

    async findById(id: string) {
        const truck = await this.prisma.trade.findUnique({
            where: { id },
            include: {
                user: true,
                views: true,
            },
        });

        if (!truck) {
            throw new NotFoundException("Грузовик не найден");
        }

        return {
            truck,
        };
    }

    async findAllActiveByUserId(userId: string, page = 1, perPage = 5) {
        // const currentPage = Math.max(1, Number(page));
        // const limit = Math.max(1, Number(perPage));
        // const offset = (currentPage - 1) * limit;

        // const [trucks, total] = await this.prisma.$transaction([
        //     this.prisma.trade.findMany({
        //         where: {
        //             userId,
        //             isArchived: false,
        //         },
        //         orderBy: {
        //             updatedAt: "desc",
        //         },
        //         skip: offset,
        //         take: limit,
        //         include: {
        //             views: true,
        //         },
        //     }),
        //     this.prisma.trade.count({
        //         where: {
        //             userId,
        //             isArchived: false,
        //         },
        //     }),
        // ]);

        // return {
        //     trucks,
        //     hasMore: currentPage * limit < total,
        //     total,
        // };

        const trucks = await this.prisma.trade.findMany({
            where: {
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

        if (!trucks.length) {
            return { message: "Грузовики не найдены", trucks: [] };
        }

        return {
            trucks,
            message: `Найдено ${trucks.length} грузовиков`,
        };
    }

    async findAllArchivedByUserId(userId: string, page = 1, perPage = 5) {
        // const currentPage = Math.max(1, Number(page));
        // const limit = Math.max(1, Number(perPage));
        // const offset = (currentPage - 1) * limit;

        // const [trucks, total] = await this.prisma.$transaction([
        //     this.prisma.trade.findMany({
        //         where: {
        //             userId,
        //             isArchived: true,
        //         },
        //         orderBy: {
        //             updatedAt: "desc",
        //         },
        //         skip: offset,
        //         take: limit,
        //         include: {
        //             views: true,
        //         },
        //     }),
        //     this.prisma.trade.count({
        //         where: {
        //             userId,
        //             isArchived: true,
        //         },
        //     }),
        // ]);

        const trucks = await this.prisma.trade.findMany({
            where: {
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

        if (!trucks.length) {
            return { message: "Грузовики не найдены", trucks: [] };
        }

        return {
            trucks,
            message: `Найдено ${trucks.length} грузовиков`,
        };
    }

    async findAll(page = 1, perPage = 5) {
        const currentPage = Math.max(1, Number(page));
        const limit = Math.max(1, Number(perPage));
        const offset = (currentPage - 1) * limit;

        const [trucks, total] = await this.prisma.$transaction([
            this.prisma.trade.findMany({
                where: {
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
                    isArchived: false,
                },
            }),
        ]);

        return {
            trucks,
            hasMore: currentPage * limit < total,
            total,
        };
    }

    async archivate(id: string) {
        const truck = await this.prisma.trade.update({
            where: { id },
            data: { isArchived: true },
        });

        if (!truck) {
            throw new NotFoundException("Грузовик не найден");
        }

        return {
            truck,
            message: "Грузовик успешно архивирован",
        };
    }

    async activate(id: string) {
        const oldTruck = await this.prisma.trade.update({
            where: { id },
            data: { isArchived: false },
        });

        if (!oldTruck) {
            throw new NotFoundException("Грузовик не найден");
        }

        const truck = await this.prisma.trade.findUnique({
            where: { id },
            include: {
                user: true,
                views: true,
            },
        });

        return {
            truck,
            message: "Грузовик успешно активирован",
        };
    }

    async removeMany(ids: string[]) {
        const trucks = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (!trucks.length) {
            throw new NotFoundException("Грузовики не найдены");
        }

        for (const truck of trucks) {
            if (truck.photos?.length) {
                for (const photo of truck.photos) {
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
            message: "Грузовики успешно удалены",
        };
    }

    async archivateMany(ids: string[]) {
        const trucks = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (trucks.length === 0) {
            throw new NotFoundException("Грузовики не найдены");
        }

        await this.prisma.trade.updateMany({
            where: { id: { in: ids } },
            data: { isArchived: true },
        });

        return {
            message: "Грузовики успешно архивированы",
        };
    }

    async activateMany(ids: string[]) {
        const existsTrucks = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
        });

        if (existsTrucks.length === 0) {
            throw new NotFoundException("Грузовики не найдены");
        }

        await this.prisma.trade.updateMany({
            where: { id: { in: ids } },
            data: { isArchived: false },
        });

        const trucks = await this.prisma.trade.findMany({
            where: { id: { in: ids } },
            include: {
                user: true,
                views: true,
            },
        });

        return {
            trucks,
            message: "Грузовики успешно активированы",
        };
    }

    async addView(id: string) {
        const truck = await this.prisma.trade.findUnique({
            where: { id },
            select: { viewsId: true },
        });

        if (!truck?.viewsId) {
            throw new Error("Views не привязан к Trade");
        }

        // 2. Увеличиваем счётчик
        await this.prisma.views.update({
            where: { id: truck.viewsId },
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
                "Не указаны id грузовика или пользователя"
            );
        }

        const wishTruck = await this.prisma.wishList.findUnique({
            where: {
                userId_tradeId: {
                    userId,
                    tradeId,
                },
            },
        });

        if (wishTruck) {
            await this.removeFromWishlist(userId, tradeId);
        }

        await this.prisma.wishList.create({
            data: {
                tradeId,
                userId,
            },
        });

        return { message: "Грузовик добавлен в избранное" };
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

        return { message: "Грузовик удален из избранного" };
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

        return { message: "Все грузовики удалены из избранного" };
    }

    async getWishlist(userId: string) {
        const trucks = await this.prisma.wishList.findMany({
            where: {
                userId,
                trade: {
                    variant: "TRUCK",
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

        if (!trucks.length) {
            return { trucks: [], message: "Грузы не найдены в избранном" };
        }

        // Возвращаем только массив trade
        return {
            trucks: trucks.map((item) => item.trade),
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

    async findByFilter(dto: FilterTruckDto) {
        const {
            city,
            truckBrand,
            typeTruck,
            typeEngine,
            status,
            exist,
            drive,
            transmission,
            steering,
            truckWheel,
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
            ...(city && { city }),
            ...(truckBrand && { truckBrand }),
            ...(typeTruck && { typeTruck }),
            ...(typeEngine && { typeEngine }),
            ...(status && { status }),
            ...(exist && { exist }),
            ...(drive && { drive }),
            ...(transmission && { transmission }),
            ...(steering && { steering }),
            ...(truckWheel && { truckWheel }),
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

        const trucks = await this.prisma.trade.findMany({
            where,
            orderBy: {
                updatedAt: "desc",
            },
            include: {
                user: true,
                views: true,
            },
        });

        if (!trucks.length) {
            return {
                trucks: [],
                message: "По вашему запросу грузовики не найдены",
            };
        }

        return {
            trucks,
            message: `Найдено ${trucks.length} грузовиков`,
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
