/** @format */

import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { CreateTransportDto } from "./dto/create-transport.dto";
import { UpdateTransportDto } from "./dto/update-transport.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { UserService } from "../user/user.service";
import { Prisma } from "generated/prisma";

@Injectable()
export class TransportService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly config: ConfigService,
        private readonly userService: UserService
    ) {}

    async findAll(page: number = 1, perPage: number = 5) {
        const now = new Date();

        const transports = await this.prisma.transport.findMany({
            where: {
                isArchived: false,
                endDate: {
                    gte: now,
                },
                user: {
                    isBlocked: false,
                },
            },
            orderBy: {
                updatedAt: "desc", // по дате создания (можешь поменять на что нужно)
            },
            skip: (page - 1) * perPage,
            take: perPage,
            include: {
                user: {
                    select: {
                        isVerified: true,
                        name: true,
                        phone: true,
                        whatsapp: true,
                        telegram: true,
                        skype: true,
                        viber: true,
                    },
                },
                views: true,
            },
        });

        transports.forEach((transport) => {
            if (transport.placesLoading) {
                transport.placesLoading = transport.placesLoading.filter(
                    (place) => place !== null
                );
            }
            if (transport.placesUnloading) {
                transport.placesUnloading = transport.placesUnloading.filter(
                    (place) => place !== null
                );
            }
        });

        const total = await this.prisma.transport.count({
            where: {
                isArchived: false,
                endDate: {
                    gte: now,
                },
            },
        });

        return {
            transports,
            hasMore: page * perPage < total,
            total, // есть ли еще страницы
        };
    }

    async findById(id: string) {
        const transport = await this.prisma.transport.findUnique({
            where: { id },
            include: {
                views: true,
            },
        });

        if (!transport) {
            throw new NotFoundException("Транспорт не найден");
        }

        return transport;
    }

    async update(transportId: string, userId: string, dto: UpdateTransportDto) {
        const updates: UpdateTransportDto = { userId, ...dto };

        if (dto.startDate) {
            updates.endDate = this.calculateEndDate(
                dto.startDate,
                dto.periodDays ?? 5
            );
        }

        await this.prisma.transport.update({
            where: { id: transportId },
            data: updates as Prisma.TransportUncheckedUpdateInput,
        });

        const updatedtransport = await this.prisma.transport.findUnique({
            where: { id: transportId },
        });

        return { updatedtransport, message: "Транспорт успешно обновлен" };
    }

    async remove(id: string) {
        const transport = await this.prisma.transport.findUnique({
            where: { id },
        });

        if (!transport) {
            throw new NotFoundException("Транспорт не найден");
        }

        await this.prisma.transport.delete({
            where: { id },
        });

        return {
            message: "Транспорт успешно удален",
        };
    }

    async create(dto: CreateTransportDto, userId: string) {
        const {
            startDate,
            periodDays = 5,
            whatsapp,
            telegram,
            viber,
            skype,
        } = dto;

        const endDate = this.calculateEndDate(startDate, periodDays);

        const views = await this.prisma.views.create({
            data: {},
        });

        await this.prisma.transport.create({
            data: {
                ...dto,
                userId,
                endDate,
                viewsId: views.id,
            } as Prisma.TransportUncheckedCreateInput,
        });

        await this.userService.update(userId, {
            whatsapp,
            telegram,
            viber,
            skype,
        });

        return { message: "Транспорт успешно добавлен" };
    }

    async archivate({ id }: { id: string }) {
        const transport = await this.prisma.transport.findUnique({
            where: { id },
        });

        if (!transport) {
            throw new NotFoundException("Транспорт не найден");
        }

        // if (transport.isArchived) {
        //     throw new BadRequestException("Транспорт уже архивирован");
        // }

        const updatedtransport = await this.prisma.transport.update({
            where: { id },
            data: {
                isArchived: true,
                archivedDate: new Date(),
            },
        });

        return { updatedtransport, message: "Транспорт успешно архивирован" };
    }

    async archivateMany(ids: string[]) {
        if (ids.length === 0) {
            throw new BadRequestException(
                "Не указаны id транспортов для архивирования"
            );
        }

        await this.prisma.transport.updateMany({
            where: {
                id: { in: ids },
            },
            data: {
                isArchived: true,
                archivedDate: new Date(),
            },
        });

        return {
            message: "Транспорты успешно архивированы",
        };
    }

    async activate({ id }: { id: string }) {
        const transport = await this.prisma.transport.findUnique({
            where: { id },
        });

        if (!transport) {
            throw new NotFoundException("Транспорт не найден");
        }

        const endDate = this.calculateEndDate(new Date(), 5);

        const updatedtransport = await this.prisma.transport.update({
            where: { id },
            data: {
                isArchived: false,
                archivedDate: null,
                startDate: new Date(),
                endDate,
                periodDays: 5,
            },
        });

        return { updatedtransport, message: "Транспорт успешно активирован" };
    }

    async activateMany(ids: string[]) {
        if (ids.length === 0) {
            throw new BadRequestException(
                "Не указаны id транспортов для активации"
            );
        }

        const endDate = this.calculateEndDate(new Date(), 5);

        await this.prisma.transport.updateMany({
            where: {
                id: { in: ids },
            },
            data: {
                isArchived: false,
                archivedDate: null,
                startDate: new Date(),
                endDate,
                periodDays: 5,
            },
        });

        return {
            message: "Транспорты успешно активированы",
        };
    }

    async removeMany(ids: string[]) {
        if (ids.length === 0) {
            throw new BadRequestException(
                "Не указаны id транспортов для удаления"
            );
        }

        await this.prisma.transport.deleteMany({
            where: {
                id: { in: ids },
            },
        });

        return {
            message: "Транспорты успешно удалены",
        };
    }

    async findAllByUserId(userId: string, page = 1, perPage = 5) {
        const currentPage = Math.max(1, Number(page));
        const limit = Math.max(1, Number(perPage));
        const offset = (currentPage - 1) * limit;

        const [transports, total] = await this.prisma.$transaction([
            this.prisma.transport.findMany({
                where: {
                    userId,
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
            this.prisma.transport.count({
                where: {
                    userId,
                    isArchived: false,
                },
            }),
        ]);

        return {
            transports,
            hasMore: currentPage * limit < total,
        };
    }

    async findManyByFilter(dto: UpdateTransportDto) {
        const {
            placesLoading,
            placesUnloading,
            truckType,
            loadingType,
            weight,
            volume,
            startDate,
            endDate,
        } = dto;

        const where: Record<string, unknown> = {
            isArchived: false,
        };

        if (placesLoading && placesLoading.length > 0) {
            where.placesLoading = { hasSome: placesLoading };
        }

        if (placesUnloading && placesUnloading.length > 0) {
            where.placesUnloading = { hasSome: placesUnloading };
        }

        if (truckType && truckType.length > 0) {
            where.truckType = { hasSome: truckType };
        }

        if (loadingType && loadingType.length > 0) {
            where.loadingType = { hasSome: loadingType };
        }

        if (weight !== undefined) {
            where.weight = { lte: weight };
        }

        if (volume !== undefined) {
            where.volume = { lte: volume };
        }

        if (startDate && endDate) {
            where.startDate = { lte: endDate };
            where.endDate = { gte: startDate };
        }

        const transports = await this.prisma.transport.findMany({
            where,
            orderBy: {
                updatedAt: "desc",
            },
            include: {
                views: true,
            },
        });

        return {
            transports,
            message: transports.length
                ? `Найдено: ${transports.length}`
                : `Транспорты не найдены`,
        }; // даже если пустой массив — это правильно
    }

    async findArchiveAllByUserId(userId: string) {
        const transports = await this.prisma.transport.findMany({
            where: {
                userId,
                isArchived: true,
            },
            orderBy: {
                archivedDate: "desc",
            },
            include: {
                views: true,
            },
        });

        if (!transports.length) {
            return { message: "Транспорты не найдены" };
        }

        return transports;
    }

    async findActiveByUserId(userId: string) {
        const transports = await this.prisma.transport.findMany({
            where: {
                userId,
                isArchived: false,
            },
            include: {
                views: true,
            },
        });

        return transports;
    }

    async findArchiveByUserId(userId: string) {
        const transports = await this.prisma.transport.findMany({
            where: {
                userId,
                isArchived: true,
            },
            include: {
                views: true,
            },
        });

        return transports;
    }

    async addView(transportId: string) {
        // 1. Получаем transport и его viewsId
        const transport = await this.prisma.transport.findUnique({
            where: { id: transportId },
            select: { viewsId: true },
        });

        if (!transport?.viewsId) {
            throw new Error("Views не привязан к transport");
        }

        // 2. Увеличиваем счётчик
        await this.prisma.views.update({
            where: { id: transport.viewsId },
            data: {
                count: {
                    increment: 1,
                },
            },
        });

        return { message: "Просмотр добавлен" };
    }

    async addToWishlist(userId: string, transportId: string) {
        if (!transportId || !userId) {
            throw new BadRequestException(
                "Не указаны id транспорта или пользователя"
            );
        }

        const wishtransport = await this.prisma.wishList.findUnique({
            where: {
                userId_transportId: {
                    userId,
                    transportId,
                },
            },
        });

        if (wishtransport) {
            await this.removeFromWishlist(userId, transportId);
        }

        await this.prisma.wishList.create({
            data: {
                transportId,
                userId,
            },
        });

        return { message: "Транспорт добавлен в избранное" };
    }

    async removeFromWishlist(userId: string, transportId: string) {
        const wishListItem = await this.prisma.wishList.findUnique({
            where: {
                userId_transportId: {
                    userId,
                    transportId,
                },
            },
        });

        if (!wishListItem) {
            await this.addToWishlist(userId, transportId);
        }

        await this.prisma.wishList.delete({
            where: {
                userId_transportId: {
                    userId,
                    transportId,
                },
            },
        });

        return { message: "Транспорт удален из избранного" };
    }

    async removeAllFromWishlist(userId: string) {
        await this.prisma.wishList.deleteMany({
            where: {
                userId,
                transportId: {
                    not: null,
                },
            },
        });

        return { message: "Все транспорты удалены из избранного" };
    }

    async getWishList(userId: string) {
        const transports = await this.prisma.wishList.findMany({
            where: { userId },
            include: {
                transport: {
                    include: {
                        user: {
                            select: {
                                isVerified: true,
                                name: true,
                                phone: true,
                                whatsapp: true,
                                telegram: true,
                                skype: true,
                                viber: true,
                            },
                        },
                        views: true,
                    },
                },
            },
        });

        if (!transports.length) {
            return {
                transports: [],
                message: "Транспорты не найдены в избранном",
            };
        }

        // Возвращаем только массив transport
        return {
            transports: transports.map((item) => item.transport),
        };
    }

    async isInWishlist(transportId: string, userId: string) {
        const wishListItem = await this.prisma.wishList.findUnique({
            where: {
                userId_transportId: {
                    userId,
                    transportId,
                },
            },
        });

        return !!wishListItem;
    }

    private calculateEndDate(startDate: Date, periodDays: number): Date {
        const end = new Date(startDate); // копируем, чтобы не мутировать оригинал
        end.setDate(end.getDate() + periodDays);
        return end;
    }
}
