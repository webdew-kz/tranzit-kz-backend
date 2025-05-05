-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('KZT', 'USD', 'RUB', 'EUR', 'CNY', 'TRY', 'UZS');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'CASHLESS', 'CARD', 'ANY', 'COMBINE');

-- CreateEnum
CREATE TYPE "PaymentPeriod" AS ENUM ('WHEN_LOADING', 'WHEN_UNLOADING', 'AFTER_REGISTER', 'ORIGIN_DOCS');

-- CreateEnum
CREATE TYPE "PaymentOther" AS ENUM ('AUCTION', 'NO_AUCTION', 'NDS', 'NO_NDS', 'FOR_FUEL', 'FAST_PAY');

-- CreateEnum
CREATE TYPE "TruckType" AS ENUM ('ANY', 'TENT', 'ISOTHERM', 'METAL', 'REFRIGERATOR', 'PASSENGER_BUS', 'LUXURY_BUS', 'CAR_CARRIER', 'CRANE', 'FUEL_TANKER', 'CONCRETE_MIXER', 'BITUM_TANKER', 'PLATFORM_BOARD', 'GRAIN_TRUCK', 'GRAIN_TIPPER', 'EMPTY_CONTAINER', 'CONTAINER_TRUCK', 'FEED_TRUCK', 'TIMBER_TRUCK', 'MANIPULATOR', 'OIL_TANKER', 'FURNITURE_TRUCK', 'METAL_SCRAP_TRUCK', 'MINIBUS', 'FLOUR_TRUCK', 'OVERSIZED', 'OPEN', 'PANEL_TRUCK', 'PLATFORM', 'POULTRY_TRUCK', 'ROLL_TRUCK', 'TIPPER', 'CATTLE_TRUCK', 'SPECIAL_MACHINE', 'GLASS_TRUCK', 'TRAILER', 'PIPE_TRUCK', 'TRACTOR', 'PLASTIC_BODY', 'CEMENT_TRUCK', 'GAS_TANKER', 'ISOTHERM_TANKER', 'FOOD_TANKER', 'CHEMICAL_TANKER', 'WOOD_CHIP_TRUCK', 'TOW_TRUCK', 'EXCAVATOR');

-- CreateEnum
CREATE TYPE "LoadingType" AS ENUM ('REAR', 'SIDE', 'TOP', 'FULL', 'ANY');

-- CreateEnum
CREATE TYPE "Documents" AS ENUM ('CMR', 'TIR', 'T1', 'T2', 'EKMT', 'SAN_PASSPORT', 'SAN_BOOK', 'CUSTOMS_CERT', 'CUSTOMS_CONTROL', 'COVID_TEST', 'COVID_CERT');

-- CreateEnum
CREATE TYPE "DocumentsAdr" AS ENUM ('ADR1', 'ADR2', 'ADR3', 'ADR4', 'ADR5', 'ADR6', 'ADR7', 'ADR8', 'ADR9');

-- CreateEnum
CREATE TYPE "Loadings" AS ENUM ('ALWAYS', 'WEEKLY', 'DAILY', 'AROUND_THE_CLOCK', 'SEAL', 'SEMI_TRAILER', 'COUPLING', 'PNEUMATIC_SUSP', 'HYDRAULIC_LIFT', 'CURTAIN', 'PYRAMID', 'FRAME', 'MANIPULATOR', 'HYDRAULIC_JACK', 'RAMP');

-- CreateEnum
CREATE TYPE "Terms" AS ENUM ('HOOKS', 'REMOVABLE_RACKS', 'HARD_BOARD', 'WOODEN_FLOOR', 'HORNS', 'MEGA', 'JUMBO', 'HATCHES', 'FAST_UNLOAD');

-- CreateEnum
CREATE TYPE "TermsPalletsType" AS ENUM ('EUR', 'FIN', 'ISO_111', 'ISO_100', 'USA', 'TUR', 'CHI');

-- CreateEnum
CREATE TYPE "Additionally" AS ENUM ('READY_TO_LOAD', 'ROUND_TRIP', 'WITH_FORWARDER', 'URGENT', 'PERISHABLE', 'PLATES_NOW', 'ONLY_CARRIER', 'TO_WAREHOUSE', 'GPS', 'FERRY', 'THERMAL_RECORDER');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "hash" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "city" TEXT,
    "avatar" TEXT DEFAULT '/uploads/no-avatar.png',
    "role" "Role" NOT NULL DEFAULT 'USER',
    "whatsappNumbers" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "telegramNumbers" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "viberNumbers" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "skypeNumbers" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "otherNumbers" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "subscriptionStartDate" TIMESTAMP(3),
    "subscriptionEndDate" TIMESTAMP(3),
    "subscriptionStatus" BOOLEAN DEFAULT false,
    "isVerified" BOOLEAN DEFAULT false,
    "isBlocked" BOOLEAN DEFAULT false,
    "documents" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargo" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "currency" "Currency" NOT NULL,
    "note" TEXT,
    "placesLoading" TEXT[],
    "placesUnloading" TEXT[],
    "distance" INTEGER,
    "tariff" INTEGER,
    "routeLink" TEXT,
    "weight" DOUBLE PRECISION NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "periodDays" INTEGER NOT NULL DEFAULT 5,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "isArchived" BOOLEAN DEFAULT false,
    "archivedDate" TIMESTAMP(3),
    "truckType" "TruckType"[],
    "loadingType" "LoadingType"[],
    "paymentMethod" "PaymentMethod"[],
    "paymentPeriod" "PaymentPeriod"[] DEFAULT ARRAY[]::"PaymentPeriod"[],
    "paymentOther" "PaymentOther"[] DEFAULT ARRAY[]::"PaymentOther"[],
    "paymentPrepaymentPercent" TEXT,
    "paymentDeferredDays" TEXT,
    "optionDocuments" "Documents"[] DEFAULT ARRAY[]::"Documents"[],
    "optionDocumentsAdr" "DocumentsAdr",
    "optionLoadings" "Loadings"[] DEFAULT ARRAY[]::"Loadings"[],
    "optionLoadingsTimeLoading" TEXT,
    "optionLoadingsTimeUnloading" TEXT,
    "optionLoadingsDateUnloading" TIMESTAMP(3),
    "optionLoadingsPlaceLoading" TEXT,
    "optionLoadingsPlaceUnloading" TEXT,
    "optionLoadingsBigBag" TEXT,
    "optionTerms" "Terms"[] DEFAULT ARRAY[]::"Terms"[],
    "optionTermsTemperature" TEXT,
    "optionTermsQtyPallets" TEXT,
    "optionTermsCorners" TEXT,
    "optionTermsBelts" TEXT,
    "optionTermsPalletsType" "TermsPalletsType",
    "optionAdditionally" "Additionally"[] DEFAULT ARRAY[]::"Additionally"[],
    "userId" TEXT,
    "userName" TEXT,
    "userPhone" TEXT,
    "viewsId" TEXT,

    CONSTRAINT "cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "views" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currency_rate" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "rate" TEXT NOT NULL,

    CONSTRAINT "currency_rate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "currency_rate_title_key" ON "currency_rate"("title");

-- AddForeignKey
ALTER TABLE "cargo" ADD CONSTRAINT "cargo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargo" ADD CONSTRAINT "cargo_viewsId_fkey" FOREIGN KEY ("viewsId") REFERENCES "views"("id") ON DELETE CASCADE ON UPDATE CASCADE;
