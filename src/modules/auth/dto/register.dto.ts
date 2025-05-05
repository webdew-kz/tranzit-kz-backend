/** @format */

import { IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsString()
    login: string;

    @IsString()
    @MinLength(6, {
        message: "Пароль должен содержать минимум 6 символов",
    })
    password: string;
}
