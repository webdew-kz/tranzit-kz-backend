/** @format */

import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { hashSync } from "bcrypt";
import {
    CreateUserWithEmailDto,
    CreateUserWithPhoneDto,
    CreateAdminWithPhoneDto,
} from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async createUserWithPhone(dto: CreateUserWithPhoneDto) {
        const { phone, password } = dto;

        if (!password) {
            throw new BadRequestException("Укажите пароль");
        }

        if (!phone) {
            throw new BadRequestException("Укажите номер телефона");
        }

        const hash = hashSync(password, 10);

        const existingUser = await this.prisma.user.findUnique({
            where: { phone },
        });

        if (existingUser) {
            throw new ConflictException(
                "Пользователь с таким телефоном уже существует"
            );
        }

        return this.prisma.user.create({
            data: {
                phone,
                hash,
            },
        });
    }

    async createUserWithEmail(dto: CreateUserWithEmailDto) {
        const { email, password } = dto;

        if (!password) {
            throw new BadRequestException("Укажите пароль");
        }

        if (!email) {
            throw new BadRequestException("Укажите email");
        }

        const hash = hashSync(password, 10);

        const existingUser = await this.prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new ConflictException(
                "Пользователь с таким email уже существует"
            );
        }

        return this.prisma.user.create({
            data: {
                email,
                hash,
            },
        });
    }

    async createAdmin(dto: CreateAdminWithPhoneDto) {
        const { phone, password } = dto;

        if (!password) {
            throw new BadRequestException("Укажите пароль");
        }
        if (!phone) {
            throw new BadRequestException("Укажите номер телефона");
        }

        const hash = hashSync(password, 10);

        const existingUser = await this.prisma.user.findUnique({
            where: { phone },
        });

        if (existingUser) {
            throw new ConflictException(
                "Админ с таким телефоном уже существует"
            );
        }

        return this.prisma.user.create({
            data: {
                phone,
                hash,
                role: "ADMIN",
            },
        });
    }

    async findAll() {
        const users = await this.prisma.user.findMany({
            include: {
                cargos: true,
            },
        });

        if (!users.length) {
            throw new BadRequestException("Пользователи не найдены");
        }

        return users;
    }

    async findById(id: string) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: { cargos: true },
        });

        if (!user) {
            throw new NotFoundException("Пользователь не найден");
        }

        return user;
    }

    async findByPhone(phone: string) {
        const user = await this.prisma.user.findUnique({
            where: { phone },
            include: {
                cargos: true,
            },
        });

        if (!user) {
            throw new BadRequestException("Пользователь не найден");
        }

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.prisma.user.findUnique({
            where: { email },
            include: {
                cargos: true,
            },
        });

        if (!user) {
            throw new BadRequestException("Пользователь не найден");
        }

        return user;
    }

    async findByLogin(login: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [{ email: login }, { phone: login }],
            },
        });

        if (!user) {
            throw new BadRequestException("Пользователь не найден");
        }

        return user;
    }

    async update(id: string, dto: UpdateUserDto) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new NotFoundException("Пользователь не найден");
        }

        const data: Partial<UpdateUserDto & { hash?: string }> = { ...dto };

        if (dto.password) {
            data.hash = hashSync(dto.password, 10);
            delete data.password;
        }

        if (dto.phone) {
            const exists = await this.prisma.user.findFirst({
                where: {
                    phone: data.phone,
                    NOT: { id },
                },
            });

            if (exists) {
                throw new ConflictException(
                    "Пользователь с таким телефоном уже существует"
                );
            }
        }

        const updatedUser = await this.prisma.user.update({
            where: { id },
            data,
        });

        return {
            updatedUser,
            message: "Данные успешно обновлены",
        };
    }

    async remove(id: string) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            throw new BadRequestException("Пользователь не найден");
        }

        await this.prisma.user.delete({
            where: { id },
        });

        return {
            message: `Пользователь успешно удален`,
        };
    }
}
