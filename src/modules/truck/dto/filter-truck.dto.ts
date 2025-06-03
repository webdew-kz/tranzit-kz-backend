/** @format */

import {
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

export class FilterTruckDto {
    @IsOptional()
    @IsString()
    city: string;

    @Equals(VariantEnum.TRUCK)
    variant: VariantEnum;

    @IsOptional()
    @IsEnum(TruckBrandEnum)
    truckBrand: TruckBrandEnum;

    @IsOptional()
    @IsString()
    truckBrandId: string;

    @IsOptional()
    @IsString()
    truckBrandModelId: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    photos: string[];

    @IsOptional()
    @IsEnum(TypeTruckEnum)
    typeTruck: TypeTruckEnum;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    minWeight: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    maxWeight: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    minPrice: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    maxPrice: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    @Min(1900)
    @Max(2099)
    minYear: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    @Min(1900)
    @Max(2099)
    maxYear: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    minMileage?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    maxMileage?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    minVolumeEngine?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    maxVolumeEngine?: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    minPowerEngine?: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    maxPowerEngine?: number;

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
