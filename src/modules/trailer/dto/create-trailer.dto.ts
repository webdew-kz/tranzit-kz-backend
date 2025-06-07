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
    TypeEngineEnum,
    VariantEnum,
    TrailerBrandEnum,
    TypeTechnicEnum,
    TypeTrailerEnum,
    QtyAxisEnum,
    TypeSuspensionEnum,
    TypeBrakeEnum,
} from "generated/prisma";

export class CreateTrailerDto {
    @IsString()
    city: string;

    @Equals(VariantEnum.TRAILER)
    variant: VariantEnum;

    @IsOptional()
    oldPhotos?: string[];

    @Type(() => Number)
    @IsInt()
    @IsPositive()
    price?: number;

    @Type(() => Number)
    @IsInt()
    @IsPositive()
    weight?: number;

    @IsOptional()
    @IsEnum(TrailerBrandEnum)
    trailerBrand: TrailerBrandEnum;

    @IsOptional()
    @IsEnum(TypeTechnicEnum)
    typeTechnic: TypeTechnicEnum;

    @IsOptional()
    @IsEnum(TypeTrailerEnum)
    typeTrailer: TypeTrailerEnum;

    @IsOptional()
    @IsEnum(QtyAxisEnum)
    qtyAxis: QtyAxisEnum;

    @IsOptional()
    @IsEnum(TypeSuspensionEnum)
    typeSuspension: TypeSuspensionEnum;

    @IsOptional()
    @IsEnum(TypeBrakeEnum)
    typeBrake: TypeBrakeEnum;

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
