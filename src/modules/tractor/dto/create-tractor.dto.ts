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
    // TractorBrandEnum,
    TractorWheelEnum,
    TypeEngineEnum,
    // TypeTractorEnum,
    VariantEnum,
} from "generated/prisma";

export class CreateTractorDto {
    @IsString()
    city: string;

    @Equals(VariantEnum.TRACTOR)
    variant: VariantEnum;

    @IsOptional()
    oldPhotos?: string[];

    // @IsEnum(TractorBrandEnum)
    // tractorBrand: TractorBrandEnum;

    // @IsEnum(TypeTractorEnum)
    // typeTractor: TypeTractorEnum;

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
    @IsEnum(TractorWheelEnum)
    tractorWheel?: TractorWheelEnum;

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
