/** @format */

import {
    IsOptional,
    IsString,
    IsEmail,
    IsArray,
    IsBoolean,
    IsDate,
    MinLength,
} from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    @MinLength(6, {
        message: "Пароль должен содержать минимум 6 символов",
    })
    password?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    roles?: string[];

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    surname?: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    avatar?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    whatsapp?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    telegram?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    viber?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    skype?: string;

    @IsOptional()
    @IsDate()
    subscriptionStartDate?: Date;

    @IsOptional()
    @IsDate()
    subscriptionEndDate?: Date;

    @IsOptional()
    @IsBoolean()
    subscriptionStatus?: boolean;

    @IsOptional()
    @IsBoolean()
    isVerified?: boolean;

    @IsOptional()
    @IsBoolean()
    isBlocked?: boolean;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    documents?: string[];
}
