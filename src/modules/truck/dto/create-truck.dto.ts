/** @format */

import { Type } from "class-transformer";
import {
    ArrayMinSize,
    Equals,
    IsArray,
    IsEnum,
    IsInt,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    Max,
    Min,
    MinLength,
} from "class-validator";
import {
    DriveEnum,
    ExistEnum,
    StatusEnum,
    SteeringEnum,
    TransmissionEnum,
    TruckBrandEnum,
    TruckWheelEnum,
    TypeEngineEnum,
    TypeTruckEnum,
    VariantEnum,
} from "generated/prisma";

export class CreateTruckDto {
    @IsString()
    city: string;

    @Equals(VariantEnum.TRUCK)
    variant: VariantEnum;

    @IsOptional()
    oldPhotos?: string[];

    @IsEnum(TruckBrandEnum)
    truckBrand: TruckBrandEnum;

    @IsEnum(TypeTruckEnum)
    typeTruck: TypeTruckEnum;

    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    @IsPositive()
    weight?: number;

    @Type(() => Number)
    @IsInt()
    @IsPositive()
    price: number;

    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @Min(1900)
    @Max(2099)
    year: number;

    @IsOptional()
    @IsString()
    description?: string;

    @Type(() => Number)
    @IsOptional()
    @IsInt()
    mileage?: number;

    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    @IsPositive()
    volumeEngine?: number;

    @Type(() => Number)
    @IsOptional()
    @IsInt()
    @IsPositive()
    powerEngine?: number;

    @IsOptional()
    @IsEnum(TypeEngineEnum)
    typeEngine?: TypeEngineEnum;

    @IsOptional()
    @IsEnum(StatusEnum)
    status?: StatusEnum;

    @IsOptional()
    @IsEnum(ExistEnum)
    exist?: ExistEnum;

    @IsOptional()
    @IsEnum(DriveEnum)
    drive?: DriveEnum;

    @IsOptional()
    @IsEnum(TransmissionEnum)
    transmission?: TransmissionEnum;

    @IsOptional()
    @IsEnum(SteeringEnum)
    steering?: SteeringEnum;

    @IsOptional()
    @IsEnum(TruckWheelEnum)
    truckWheel?: TruckWheelEnum;

    @IsOptional()
    @IsString()
    viewsId?: string;

    @IsOptional()
    @IsString()
    userId?: string;

    @IsOptional()
    @IsString()
    userName?: string;

    @IsOptional()
    @IsString()
    userPhone?: string;

    @IsOptional()
    @IsString()
    whatsapp?: string;

    @IsOptional()
    @IsString()
    telegram?: string;

    @IsOptional()
    @IsString()
    viber?: string;

    @IsOptional()
    @IsString()
    skype?: string;
}
