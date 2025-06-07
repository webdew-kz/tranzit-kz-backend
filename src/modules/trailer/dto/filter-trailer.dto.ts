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
    TypeEngineEnum,
    VariantEnum,
    TrailerBrandEnum,
    TypeTechnicEnum,
    TypeTrailerEnum,
    QtyAxisEnum,
    TypeSuspensionEnum,
    TypeBrakeEnum,
} from "generated/prisma";

export class FilterTrailerDto {
    @IsOptional()
    @IsString()
    city: string;

    @Equals(VariantEnum.TRAILER)
    variant: VariantEnum;

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
    @IsEnum(TypeTechnicEnum)
    typeSuspension: TypeTechnicEnum;

    @IsOptional()
    @IsEnum(TypeSuspensionEnum)
    cabinSuspension: TypeSuspensionEnum;

    @IsOptional()
    @IsEnum(TypeBrakeEnum)
    typeBrake: TypeBrakeEnum;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    photos: string[];

    // @IsOptional()
    // @IsEnum(TypeTrailerEnum)
    // typeTrailer: TypeTrailerEnum;

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
