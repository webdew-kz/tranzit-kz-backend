/** @format */

import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import {
    CreateAdminWithPhoneDto,
    CreateUserWithEmailDto,
} from "../user/dto/create-user.dto";
import { compare } from "bcrypt";
import { Request, Response } from "express";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
import { EmailService } from "../email/email.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwt: JwtService,
        private readonly userService: UserService,
        private readonly config: ConfigService,
        private readonly prisma: PrismaService,
        private readonly emailService: EmailService
    ) {}

    EXPIRE_DAY_REFRESH_TOKEN = 10 * 365 * 24 * 60 * 60 * 1000;
    REFRESH_TOKEN_NAME = "refreshToken";

    async login(dto: LoginDto, res: Response) {
        const user = await this.validateUser(dto.login);

        await this.validatePassword(dto.password, user.hash);

        const tokens = this.issueTokens(user.id);

        this.setRefreshToken(tokens.refreshToken, res);
        // this.setAccessToken(tokens.accessToken, res);

        // res.cookie("accessToken", tokens.accessToken, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: "lax",
        //     path: "/",
        //     maxAge: 1000 * 60 * 60 * 24,
        //     // domain: `.${this.config.get("COOKIE_DOMAIN")}`,
        // });

        // res.cookie("userId", user.id, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: "lax",
        //     path: "/",
        //     maxAge: 1000 * 60 * 60 * 24,
        //     // domain: `.${this.config.get("COOKIE_DOMAIN")}`,
        // });

        return {
            user,
            accessToken: tokens.accessToken,
            message: "Успешный вход",
        };
    }

    async isExistingUser(login: string): Promise<boolean> {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [{ email: login }, { phone: login }],
            },
        });

        return !!user;
    }

    async isExistingUserForEmail(email: string): Promise<string> {
        console.log("EMAIL service:", email);

        const user = await this.prisma.user.findFirst({
            where: { email },
        });

        if (user) {
            throw new ConflictException(
                "Пользователь с таким email уже существует"
            );
        }

        const code = await this.sendVerificationCode(email);

        return code;
    }

    async isExistingUserForEmailReset(email: string): Promise<string> {
        const user = await this.prisma.user.findFirst({
            where: { email },
        });

        if (!user) {
            throw new ConflictException(
                "Пользователь с таким email не существует"
            );
        }

        return await this.sendVerificationCode(email);
    }

    async register(dto: RegisterDto, res: Response) {
        const { login, password } = dto;

        const loginType = this.detectLoginType(login);

        if (loginType && loginType == "email") {
            const data: CreateUserWithEmailDto = {
                email: login,
                password,
            };

            await this.userService.createUserWithEmail(data);

            return await this.login({ login, password }, res);
        } else if (loginType && loginType == "phone") {
            const data: CreateAdminWithPhoneDto = {
                phone: login,
                password,
            };

            await this.userService.createUserWithPhone(data);

            return await this.login({ login, password }, res);
        }
    }

    logout(res: Response) {
        this.removeRefreshToken(res);
        // this.removeAccessToken(res);
        return { message: "Вы вышли из системы" };
    }

    async reset(dto: LoginDto) {
        const { login, password } = dto;

        const user = await this.userService.findByLogin(login);

        if (!user) {
            throw new NotFoundException("Пользователь не найден");
        }

        await this.userService.update(user.id, {
            password,
        });

        return {
            message: "Пароль успешно изменен",
        };
    }

    async isAuthenticated(req: Request) {
        const refreshToken = req.cookies[this.REFRESH_TOKEN_NAME];
        if (!refreshToken) {
            throw new UnauthorizedException("Refresh token not found");
        }

        const userId = this.jwt.verify(refreshToken, {
            secret: this.config.get("JWT_SECRET"),
        }).id;

        const user = await this.userService.findById(userId);
        if (!user) {
            throw new UnauthorizedException("User not found");
        }

        return user;
    }

    private async sendVerificationCode(email: string) {
        console.log("EMAIL send:", email);

        const code = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit code
        await this.emailService.sendVerificationCode(email, code);
        return code;
    }

    private issueTokens(userId: string) {
        const data = { id: userId };

        const accessToken: string = this.jwt.sign(data, {
            expiresIn: "1d",
        });

        const refreshToken: string = this.jwt.sign(data, {
            expiresIn: "7d",
        });

        return { accessToken, refreshToken };
    }

    // private getRefreshTokenFromCookie(req: Request) {
    // 	const refreshToken = req.cookies[this.REFRESH_TOKEN_NAME];
    // 	if (!refreshToken) {
    // 		throw new UnauthorizedException("Refresh token not found");
    // 	}
    // 	return refreshToken;
    // }

    private setRefreshToken(refreshToken: string, res: Response) {
        const expiresIn = new Date();
        expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);

        res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 лет
            domain: this.config.getOrThrow<string>("COOKIE_DOMAIN"),
        });
    }

    private setAccessToken(accessToken: string, res: Response) {
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            path: "/",
            sameSite: "lax",
            secure: true, // true в проде
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 лет
            domain: this.config.getOrThrow<string>("COOKIE_DOMAIN"),
        });
    }

    private removeAccessToken(res: Response) {
        res.cookie("accessToken", "", {
            httpOnly: true,
            sameSite: "lax",
            secure: true,
            expires: new Date(0),
            // domain: this.config.getOrThrow<string>("COOKIE_DOMAIN"),
        });
    }

    private removeRefreshToken(res: Response) {
        res.cookie(this.REFRESH_TOKEN_NAME, "", {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            expires: new Date(0),
            // domain: this.config.getOrThrow<string>("COOKIE_DOMAIN"),
        });
    }

    private async validateUser(login: string) {
        const user = await this.userService.findByLogin(login);

        if (!user) throw new NotFoundException("Пользователь не найден");

        return user;
    }

    private async validatePassword(password: string, hash: string) {
        const isPasswordValid: boolean = await compare(password, hash);
        if (!isPasswordValid) {
            throw new UnauthorizedException("Неверный логин или пароль");
        }
    }

    private detectLoginType(login: string): "email" | "phone" | false {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login);
        const isPhone = /^[0-9]{10,15}$/.test(login); // теперь без `+`, только цифры

        if (isEmail) return "email";
        if (isPhone) return "phone";

        throw new BadRequestException("Некорректный формат логина");
    }
}
