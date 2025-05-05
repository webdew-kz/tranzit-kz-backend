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
import { Currency } from "../enums/cargo.enums";

export class CreateCargoDto {
    @IsString()
    title: string;

    @IsInt()
    price: number;

    @IsEnum(Currency)
    currency: Currency;

    @IsOptional()
    @IsString()
    note?: string;

    @IsArray()
    @IsString({ each: true })
    placesLoading: string[];

    @IsArray()
    @IsString({ each: true })
    placesUnloading: string[];

    @IsInt()
    @IsOptional()
    distance?: number;

    @IsNumber()
    @IsOptional()
    tariff?: number;

    @IsString()
    @IsOptional()
    routeLink?: string;

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

    @IsArray()
    @IsEnum(PaymentMethod, { each: true })
    paymentMethod: PaymentMethod[];

    @IsOptional()
    @IsArray()
    @IsEnum(PaymentPeriod, { each: true })
    paymentPeriod?: PaymentPeriod[];

    @IsOptional()
    @IsArray()
    @IsEnum(PaymentOther, { each: true })
    paymentOther?: PaymentOther[];

    @IsOptional()
    @IsString()
    paymentPrepaymentPercent?: string;

    @IsOptional()
    @IsString()
    paymentDeferredDays?: string;

    @IsOptional()
    @IsArray()
    @IsEnum(Documents, { each: true })
    optionDocuments?: Documents[];

    @IsOptional()
    @IsEnum(DocumentsAdr)
    optionDocumentsAdr?: DocumentsAdr;

    @IsOptional()
    @IsArray()
    @IsEnum(Loadings, { each: true })
    optionLoadings?: Loadings[];

    @IsOptional()
    @IsString()
    optionLoadingsTimeLoading?: string;

    @IsOptional()
    @IsString()
    optionLoadingsTimeUnloading?: string;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    optionLoadingsDateUnloading?: Date;

    @IsOptional()
    @IsString()
    optionLoadingsPlaceLoading?: string;

    @IsOptional()
    @IsString()
    optionLoadingsPlaceUnloading?: string;

    @IsOptional()
    @IsString()
    optionLoadingsBigBag?: string;

    @IsOptional()
    @IsArray()
    @IsEnum(Terms, { each: true })
    optionTerms?: Terms[];

    @IsOptional()
    @IsString()
    optionTermsTemperature?: string;

    @IsOptional()
    @IsString()
    optionTermsQtyPallets?: string;

    @IsOptional()
    @IsString()
    optionTermsCorners?: string;

    @IsOptional()
    @IsString()
    optionTermsBelts?: string;

    @IsOptional()
    @IsEnum(TermsPalletsType)
    optionTermsPalletsType?: TermsPalletsType;

    @IsOptional()
    @IsArray()
    @IsEnum(Additionally, { each: true })
    optionAdditionally?: Additionally[];

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
}
