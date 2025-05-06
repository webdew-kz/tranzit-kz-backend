/** @format */
import axios from "axios";
import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { CreateCargoDto } from "./dto/create-cargo.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { UpdateCargoDto } from "./dto/update-cargo.dto";
import { SearchCargoDto } from "./dto/search-cargo.dto";
import { Prisma } from "generated/prisma";
import { UserService } from "../user/user.service";

@Injectable()
export class CargoService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly config: ConfigService,
        private readonly userService: UserService
    ) {}

    async create(dto: CreateCargoDto, userId: string) {
        const {
            placesLoading,
            placesUnloading,
            price,
            startDate,
            periodDays = 5,
            whatsapp,
            telegram,
            viber,
            skype,
        } = dto;

        const distance = await this.calculateTotalDistanceForTruck(
            placesLoading,
            placesUnloading
        );

        const tariff = Math.round(+price / +distance);

        const routeLink = this.generateGoogleMapsRouteUrl(
            placesLoading,
            placesUnloading
        );

        const endDate = this.calculateEndDate(startDate, periodDays);

        const views = await this.prisma.views.create({
            data: {},
        });

        await this.prisma.cargo.create({
            data: {
                ...dto,
                userId,
                distance,
                tariff,
                routeLink,
                endDate,
                viewsId: views.id, // ✅ единственно поддерживаемый способ
            } as Prisma.CargoUncheckedCreateInput, // 👈 обязательно!
        });

        await this.userService.update(userId, {
            whatsapp,
            telegram,
            viber,
            skype,
        });

        return { message: "Груз успешно добавлен" };
    }

    async archivate({ id }: { id: string }) {
        const cargo = await this.prisma.cargo.findUnique({ where: { id } });

        if (!cargo) {
            throw new NotFoundException("Груз не найден");
        }

        // if (cargo.isArchived) {
        //     throw new BadRequestException("Груз уже архивирован");
        // }

        const updatedCargo = await this.prisma.cargo.update({
            where: { id },
            data: {
                isArchived: true,
                archivedDate: new Date(),
            },
        });

        return { updatedCargo, message: "Груз успешно архивирован" };
    }

    async archivateMany(ids: string[]) {
        if (ids.length === 0) {
            throw new BadRequestException(
                "Не указаны id грузов для архивирования"
            );
        }

        await this.prisma.cargo.updateMany({
            where: {
                id: { in: ids },
            },
            data: {
                isArchived: true,
                archivedDate: new Date(),
            },
        });

        return {
            message: "Грузы успешно архивированы",
        };
    }

    async activate({ id }: { id: string }) {
        const cargo = await this.prisma.cargo.findUnique({ where: { id } });

        if (!cargo) {
            throw new NotFoundException("Груз не найден");
        }

        // if (!cargo.isArchived) {
        //     throw new BadRequestException("Груз уже активирован");
        // }

        const endDate = this.calculateEndDate(new Date(), 5);

        const updatedCargo = await this.prisma.cargo.update({
            where: { id },
            data: {
                isArchived: false,
                archivedDate: null,
                startDate: new Date(),
                endDate,
                periodDays: 5,
            },
        });

        return { updatedCargo, message: "Груз успешно активирован" };
    }

    async activateMany(ids: string[]) {
        if (ids.length === 0) {
            throw new BadRequestException("Не указаны id грузов для активации");
        }

        const endDate = this.calculateEndDate(new Date(), 5);

        await this.prisma.cargo.updateMany({
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
            message: "Грузы успешно активированы",
        };
    }

    async update(cargoId: string, userId: string, dto: UpdateCargoDto) {
        const updates: UpdateCargoDto = { userId, ...dto };

        // 👉 Пересчитываем расстояние, если заданы точки маршрута
        if (dto.placesLoading && dto.placesUnloading) {
            updates.distance = await this.calculateTotalDistanceForTruck(
                dto.placesLoading,
                dto.placesUnloading
            );

            if (dto.price) {
                updates.tariff = Math.round(+dto.price / updates.distance);
            }

            updates.routeLink = this.generateGoogleMapsRouteUrl(
                dto.placesLoading,
                dto.placesUnloading
            );
        }

        // 👉 Пересчитываем endDate, если есть дата начала
        if (dto.startDate) {
            updates.endDate = this.calculateEndDate(
                dto.startDate,
                dto.periodDays ?? 5
            );
        }

        await this.prisma.cargo.update({
            where: { id: cargoId },
            data: updates as Prisma.CargoUncheckedUpdateInput,
        });

        const updatedCargo = await this.prisma.cargo.findUnique({
            where: { id: cargoId },
        });

        return { updatedCargo, message: "Груз успешно обновлен" };
    }

    async remove(id: string) {
        const cargo = await this.prisma.cargo.findUnique({
            where: { id },
        });

        if (!cargo) {
            throw new NotFoundException("Груз не найден");
        }

        await this.prisma.cargo.delete({
            where: { id },
        });

        return {
            message: "Груз успешно удален",
        };
    }

    async removeMany(ids: string[]) {
        if (ids.length === 0) {
            throw new BadRequestException("Не указаны id грузов для удаления");
        }

        await this.prisma.cargo.deleteMany({
            where: {
                id: { in: ids },
            },
        });

        return {
            message: "Грузы успешно удалены",
        };
    }

    async findById(id: string) {
        const cargo = await this.prisma.cargo.findUnique({
            where: { id },
            include: {
                views: true,
            },
        });

        if (!cargo) {
            throw new NotFoundException("Груз не найден");
        }

        return cargo;
    }

    async findAll(page: number = 1, perPage: number = 5) {
        const now = new Date();

        const cargos = await this.prisma.cargo.findMany({
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

        cargos.forEach((cargo) => {
            if (cargo.placesLoading) {
                cargo.placesLoading = cargo.placesLoading.filter(
                    (place) => place !== null
                );
            }
            if (cargo.placesUnloading) {
                cargo.placesUnloading = cargo.placesUnloading.filter(
                    (place) => place !== null
                );
            }
        });

        const total = await this.prisma.cargo.count({
            where: {
                isArchived: false,
                endDate: {
                    gte: now,
                },
            },
        });

        return {
            cargos,
            hasMore: page * perPage < total,
            total, // есть ли еще страницы
        };
    }

    async findAllByUserId(userId: string, page = 1, perPage = 5) {
        const currentPage = Math.max(1, Number(page));
        const limit = Math.max(1, Number(perPage));
        const offset = (currentPage - 1) * limit;

        const [cargos, total] = await this.prisma.$transaction([
            this.prisma.cargo.findMany({
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
            this.prisma.cargo.count({
                where: {
                    userId,
                    isArchived: false,
                },
            }),
        ]);

        return {
            cargos,
            hasMore: currentPage * limit < total,
        };
    }

    async findManyByFilter(dto: SearchCargoDto) {
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

        const cargos = await this.prisma.cargo.findMany({
            where,
            orderBy: {
                updatedAt: "desc",
            },
            include: {
                views: true,
            },
        });

        return {
            cargos,
            message: cargos.length
                ? `Найдено: ${cargos.length}`
                : `Грузы не найдены`,
        }; // даже если пустой массив — это правильно
    }

    async findArchiveAllByUserId(userId: string) {
        const cargos = await this.prisma.cargo.findMany({
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

        if (!cargos.length) {
            return { message: "Грузы не найдены" };
        }

        return cargos;
    }

    async findActiveByUserId(userId: string) {
        const cargos = await this.prisma.cargo.findMany({
            where: {
                userId,
                isArchived: false,
            },
            include: {
                views: true,
            },
        });

        return cargos;
    }

    async findArchiveByUserId(userId: string) {
        const cargos = await this.prisma.cargo.findMany({
            where: {
                userId,
                isArchived: true,
            },
            include: {
                views: true,
            },
        });

        return cargos;
    }

    async addView(cargoId: string) {
        // 1. Получаем cargo и его viewsId
        const cargo = await this.prisma.cargo.findUnique({
            where: { id: cargoId },
            select: { viewsId: true },
        });

        if (!cargo?.viewsId) {
            throw new Error("Views не привязан к Cargo");
        }

        // 2. Увеличиваем счётчик
        await this.prisma.views.update({
            where: { id: cargo.viewsId },
            data: {
                count: {
                    increment: 1,
                },
            },
        });

        return { message: "Просмотр добавлен" };
    }

    async addToWishlist(userId: string, cargoId: string) {
        if (!cargoId || !userId) {
            throw new BadRequestException(
                "Не указаны id груза или пользователя"
            );
        }

        const wishCargo = await this.prisma.wishList.findUnique({
            where: {
                userId_cargoId: {
                    userId,
                    cargoId,
                },
            },
        });

        if (wishCargo) {
            await this.removeFromWishlist(userId, cargoId);
        }

        await this.prisma.wishList.create({
            data: {
                cargoId,
                userId,
            },
        });

        return { message: "Груз добавлен в избранное" };
    }

    async removeFromWishlist(userId: string, cargoId: string) {
        const wishListItem = await this.prisma.wishList.findUnique({
            where: {
                userId_cargoId: {
                    userId,
                    cargoId,
                },
            },
        });

        if (!wishListItem) {
            await this.addToWishlist(userId, cargoId);
        }

        await this.prisma.wishList.delete({
            where: {
                userId_cargoId: {
                    userId,
                    cargoId,
                },
            },
        });

        return { message: "Груз удален из избранного" };
    }

    async removeAllFromWishlist(userId: string) {
        await this.prisma.wishList.deleteMany({
            where: {
                userId,
            },
        });

        return { message: "Все грузы удалены из избранного" };
    }

    async getWishList(userId: string) {
        const cargos = await this.prisma.wishList.findMany({
            where: { userId },
            include: {
                cargo: {
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

        if (!cargos.length) {
            return { cargos: [], message: "Грузы не найдены в избранном" };
        }

        // Возвращаем только массив cargo
        return {
            cargos: cargos.map((item) => item.cargo),
        };
    }

    async isInWishlist(cargoId: string, userId: string) {
        const wishListItem = await this.prisma.wishList.findUnique({
            where: {
                userId_cargoId: {
                    userId,
                    cargoId,
                },
            },
        });

        return !!wishListItem;
    }

    private async calculateTotalDistanceForTruck(
        placesLoading: string[],
        placesUnloading: string[]
    ): Promise<number> {
        const apiKey = this.config.getOrThrow<string>("GOOGLE_API_KEY");

        const route = [...placesLoading, ...placesUnloading]; // порядок строго сохраняется

        let totalDistance = 0;

        for (let i = 0; i < route.length - 1; i++) {
            const origin = route[i];
            const destination = route[i + 1];

            try {
                const response = await axios.get(
                    "https://maps.googleapis.com/maps/api/distancematrix/json",
                    {
                        params: {
                            origins: origin,
                            destinations: destination,
                            key: apiKey,
                            units: "metric",
                            language: "ru",
                        },
                    }
                );

                interface DistanceMatrixResponse {
                    rows: {
                        elements: {
                            status: string;
                            distance: { value: number };
                        }[];
                    }[];
                }

                const data = response.data as DistanceMatrixResponse;
                const element = data.rows[0].elements[0];

                if (element.status === "OK") {
                    totalDistance += element.distance.value; // метры
                } else {
                    console.warn(
                        `Ошибка получения расстояния: ${origin} → ${destination}`,
                        element.status
                    );
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error("Ошибка запроса к Google API", error.message);
                } else {
                    console.error("Ошибка запроса к Google API", error);
                }
            }
        }

        return Math.round(totalDistance / 1000); // километры
    }

    private generateGoogleMapsRouteUrl(
        placesLoading: string[],
        placesUnloading: string[]
    ): string {
        const route = [...placesLoading, ...placesUnloading];

        if (route.length < 2) return "";

        const origin = route[0];
        const destination = route[route.length - 1];
        const waypoints = route.slice(1, -1).join("|");

        const url = new URL("https://www.google.com/maps/dir/");

        if (waypoints) {
            url.searchParams.set("api", "1");
            url.searchParams.set("origin", origin);
            url.searchParams.set("destination", destination);
            url.searchParams.set("travelmode", "driving");
            url.searchParams.set("waypoints", waypoints);
        } else {
            // если только 2 точки — без waypoints
            url.pathname += `${origin}/${destination}`;
        }

        return url.toString();
    }

    private calculateEndDate(startDate: Date, periodDays: number): Date {
        const end = new Date(startDate); // копируем, чтобы не мутировать оригинал
        end.setDate(end.getDate() + periodDays);
        return end;
    }
}
