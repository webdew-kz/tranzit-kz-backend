/** @format */

import { IsString, MinLength } from "class-validator";

export class CreateUserWithPhoneDto {
    @IsString()
    phone: string;

    @IsString()
    @MinLength(6, {
        message: "Пароль должен содержать минимум 6 символов",
    })
    password: string;
}

export class CreateUserWithEmailDto {
    @IsString()
    email: string;

    @IsString()
    @MinLength(6, {
        message: "Пароль должен содержать минимум 6 символов",
    })
    password: string;
}

export class CreateAdminWithPhoneDto {
    @IsString()
    phone: string;

    @IsString()
    @MinLength(6, {
        message: "Пароль должен содержать минимум 6 символов",
    })
    password: string;
}
