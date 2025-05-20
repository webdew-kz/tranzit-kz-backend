/** @format */

import {
    IsString,
    IsOptional,
    IsInt,
    IsNumber,
    IsArray,
    IsEnum,
    IsDate,
    IsPositive,
    Min,
    Max,
} from "class-validator";
import { Type } from "class-transformer";
import {
    Additionally,
    Documents,
    DocumentsAdr,
    Loadings,
    LoadingType,
    PaymentMethod,
    PaymentOther,
    PaymentPeriod,
    Terms,
    TermsPalletsType,
    TruckType,
} from "generated/prisma";

export class CreateTransportDto {
    @IsOptional()
    @IsString()
    note?: string;

    @IsArray()
    @IsString({ each: true })
    placesLoading: string[];

    @IsArray()
    @IsString({ each: true })
    placesUnloading: string[];

    @IsNumber()
    @IsPositive()
    weight: number;

    @IsNumber()
    @IsPositive()
    volume: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(30)
    periodDays?: number;

    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    endDate?: Date;

    @IsOptional()
    @IsInt()
    views: number;

    @IsArray()
    @IsEnum(TruckType, { each: true })
    truckType: TruckType[];

    @IsArray()
    @IsEnum(LoadingType, { each: true })
    loadingType: LoadingType[];

    @IsOptional()
    @IsArray()
    @IsEnum(Documents, { each: true })
    optionDocuments?: Documents[];

    @IsOptional()
    @IsEnum(DocumentsAdr)
    optionDocumentsAdr?: DocumentsAdr;

    @IsOptional()
    @IsString()
    userId?: string; // можно передавать или подставлять из авторизации

    @IsOptional()
    @IsString()
    viewsId?: string; // можно передавать или подставлять из авторизации

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
