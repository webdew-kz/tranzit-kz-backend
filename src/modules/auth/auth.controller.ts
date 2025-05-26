/** @format */

import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { Auth } from "./decorators/auth.decorator";
import { Response } from "express";
import { ConfigService } from "@nestjs/config";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly config: ConfigService
    ) {}

    @HttpCode(200)
    @Post("login")
    async login(
        @Body() dto: LoginDto,
        @Res({ passthrough: true }) res: Response
    ) {
        const response = await this.authService.login(dto);
        res.cookie("accessToken", response.token, {
            httpOnly: true,
            sameSite: "lax", // или 'strict'
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 лет
            secure: this.config.get("NODE_ENV") === "production", // Используйте true в production
            domain: `.${this.config.get("COOKIE_DOMAIN")}`, // Если нужно
            path: "/", // Важно указать path, чтобы совпадал с кукой
        });
        return response;
    }

    @Auth()
    @HttpCode(200)
    @Post("logout")
    logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie("accessToken", {
            httpOnly: true,
            sameSite: "lax", // или 'strict'
            secure: this.config.get("NODE_ENV") === "production",
            domain: `.${this.config.get("COOKIE_DOMAIN")}`, // если устанавливали с доменом
            path: "/", // должен точно совпадать
        });

        return this.authService.logout(res);
    }

    @HttpCode(200)
    @Post("register")
    async register(
        @Body() dto: RegisterDto,
        @Res({ passthrough: true }) res: Response
    ) {
        const response = await this.authService.register(dto);
        res.cookie("accessToken", response?.token, {
            httpOnly: true,
            sameSite: "lax", // или 'strict'
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 лет
            secure: this.config.get("NODE_ENV") === "production", // Используйте true в production
            domain: `.${this.config.get("COOKIE_DOMAIN")}`, // Если нужно
            path: "/", // Важно указать path, чтобы совпадал с кукой
        });
        return response;
    }

    @HttpCode(200)
    @Post("reset")
    async reset(@Body() dto: RegisterDto) {
        return await this.authService.reset(dto);
    }

    @HttpCode(200)
    @Post("is-existing-user")
    async isExistingUser(@Body() { login }: { login: string }) {
        const res = await this.authService.isExistingUser(login);
        return { isExistingUser: res };
    }

    @HttpCode(200)
    @Post("is-existing-user-for-email")
    async isExistingUserForEmail(@Body() { email }: { email: string }) {
        // console.log("EMAIL FROM REQUEST:", email);
        return await this.authService.isExistingUserForEmail(email);
    }

    @HttpCode(200)
    @Post("is-existing-user-for-email-reset")
    async isExistingUserForEmailReset(@Body() { email }: { email: string }) {
        // console.log("email", email);

        return await this.authService.isExistingUserForEmailReset(email);
    }
}
