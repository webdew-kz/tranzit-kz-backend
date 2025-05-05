/** @format */

import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { Auth } from "./decorators/auth.decorator";
import { Response } from "express";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(200)
    @Post("login")
    async login(
        @Body() dto: LoginDto,
        @Res({ passthrough: true }) res: Response
    ) {
        return this.authService.login(dto, res);
    }

    @Auth()
    @HttpCode(200)
    @Post("logout")
    logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie("accessToken", {
            httpOnly: true,
            sameSite: "lax",
            secure: true,
        });

        res.clearCookie("userId"); // если хочешь, даже если не httpOnly

        return this.authService.logout(res);
    }

    @HttpCode(200)
    @Post("register")
    async register(
        @Body() dto: RegisterDto,
        @Res({ passthrough: true }) res: Response
    ) {
        return this.authService.register(dto, res);
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
        return await this.authService.isExistingUserForEmail(email);
    }

    @HttpCode(200)
    @Post("is-existing-user-for-email-reset")
    async isExistingUserForEmailReset(@Body() { email }: { email: string }) {
        return await this.authService.isExistingUserForEmailReset(email);
    }
}
