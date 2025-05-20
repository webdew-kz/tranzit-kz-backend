/*
  Warnings:

  - A unique constraint covering the columns `[userId,cargoId,transportId]` on the table `wish_list` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "wish_list_userId_cargoId_key";

-- CreateIndex
CREATE UNIQUE INDEX "wish_list_userId_cargoId_transportId_key" ON "wish_list"("userId", "cargoId", "transportId");
