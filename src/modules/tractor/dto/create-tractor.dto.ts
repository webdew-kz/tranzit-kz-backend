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
    TypeCabinEnum,
    CabinSuspensionEnum,
    TractorBrandEnum,
} from "generated/prisma";

export class CreateTractorDto {
    @IsString()
    city: string;

    @Equals(VariantEnum.TRACTOR)
    variant: VariantEnum;

    @IsOptional()
    oldPhotos?: string[];

    @IsOptional()
    @IsEnum(TractorBrandEnum)
    tractorBrand: TractorBrandEnum;

    @IsOptional()
    @IsEnum(TypeCabinEnum)
    typeCabin: TypeCabinEnum;

    @IsOptional()
    @IsEnum(CabinSuspensionEnum)
    cabinSuspension: CabinSuspensionEnum;

    @Type(() => Number)
    @IsInt()
    @IsOptional()
    @IsPositive()
    price: number;

    @Type(() => Number)
    @IsInt()
    @IsOptional()
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

    @IsOptional()
    @IsNumber()
    @IsPositive()
    volumeEngine?: number;

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
