/*
  Warnings:

  - The values [COVID_TEST,COVID_CERT] on the enum `Documents` will be removed. If these variants are still used in the database, this will fail.
  - The values [METAL] on the enum `TruckType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `otherNumbers` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `skypeNumbers` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `telegramNumbers` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `viberNumbers` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `whatsappNumbers` on the `user` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Documents_new" AS ENUM ('CMR', 'TIR', 'T1', 'T2', 'EKMT', 'SAN_PASSPORT', 'SAN_BOOK', 'CUSTOMS_CERT', 'CUSTOMS_CONTROL', 'DOZVOL', 'OVERSIZE_SPECIAL_PERMIT', 'CATEGORY_C', 'CATEGORY_D', 'EORI_CODE', 'REGISTRATION_CARD', 'E_QUEUE', 'VISA', 'POWER_OF_ATTORNEY', 'CARRIER_STAMP');
ALTER TABLE "cargo" ALTER COLUMN "optionDocuments" DROP DEFAULT;
ALTER TABLE "cargo" ALTER COLUMN "optionDocuments" TYPE "Documents_new"[] USING ("optionDocuments"::text::"Documents_new"[]);
ALTER TYPE "Documents" RENAME TO "Documents_old";
ALTER TYPE "Documents_new" RENAME TO "Documents";
DROP TYPE "Documents_old";
ALTER TABLE "cargo" ALTER COLUMN "optionDocuments" SET DEFAULT ARRAY[]::"Documents"[];
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "TruckType_new" AS ENUM ('ANY', 'TENT', 'ISOTHERM', 'REFRIGERATOR', 'PASSENGER_BUS', 'LUXURY_BUS', 'CAR_CARRIER', 'CRANE', 'FUEL_TANKER', 'CONCRETE_MIXER', 'BITUM_TANKER', 'PLATFORM_BOARD', 'GRAIN_TRUCK', 'GRAIN_TIPPER', 'EMPTY_CONTAINER', 'CONTAINER_TRUCK', 'FEED_TRUCK', 'TIMBER_TRUCK', 'MANIPULATOR', 'OIL_TANKER', 'FURNITURE_TRUCK', 'METAL_SCRAP_TRUCK', 'MINIBUS', 'FLOUR_TRUCK', 'OVERSIZED', 'OPEN', 'PANEL_TRUCK', 'PLATFORM', 'POULTRY_TRUCK', 'ROLL_TRUCK', 'TIPPER', 'CATTLE_TRUCK', 'SPECIAL_MACHINE', 'GLASS_TRUCK', 'TRAILER', 'PIPE_TRUCK', 'TRACTOR', 'PLASTIC_BODY', 'CEMENT_TRUCK', 'GAS_TANKER', 'ISOTHERM_TANKER', 'FOOD_TANKER', 'CHEMICAL_TANKER', 'WOOD_CHIP_TRUCK', 'TOW_TRUCK', 'EXCAVATOR', 'SQUARE', 'GAZELLE', 'FIVE_TON_TRUCK');
ALTER TABLE "cargo" ALTER COLUMN "truckType" TYPE "TruckType_new"[] USING ("truckType"::text::"TruckType_new"[]);
ALTER TYPE "TruckType" RENAME TO "TruckType_old";
ALTER TYPE "TruckType_new" RENAME TO "TruckType";
DROP TYPE "TruckType_old";
COMMIT;

-- AlterTable
ALTER TABLE "cargo" ADD COLUMN     "skype" TEXT,
ADD COLUMN     "telegram" TEXT,
ADD COLUMN     "viber" TEXT,
ADD COLUMN     "whatsapp" TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "otherNumbers",
DROP COLUMN "skypeNumbers",
DROP COLUMN "telegramNumbers",
DROP COLUMN "viberNumbers",
DROP COLUMN "whatsappNumbers",
ADD COLUMN     "skype" TEXT,
ADD COLUMN     "telegram" TEXT,
ADD COLUMN     "viber" TEXT,
ADD COLUMN     "whatsapp" TEXT;

-- CreateTable
CREATE TABLE "wish_list" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "cargoId" TEXT,

    CONSTRAINT "wish_list_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wish_list_userId_cargoId_key" ON "wish_list"("userId", "cargoId");

-- AddForeignKey
ALTER TABLE "wish_list" ADD CONSTRAINT "wish_list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wish_list" ADD CONSTRAINT "wish_list_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
