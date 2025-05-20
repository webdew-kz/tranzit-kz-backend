-- AlterTable
ALTER TABLE "wish_list" ADD COLUMN     "transportId" TEXT;

-- CreateTable
CREATE TABLE "transport" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "placesLoading" TEXT[],
    "placesUnloading" TEXT[],
    "weight" DOUBLE PRECISION NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "periodDays" INTEGER NOT NULL DEFAULT 5,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "isArchived" BOOLEAN DEFAULT false,
    "archivedDate" TIMESTAMP(3),
    "truckType" "TruckType"[],
    "loadingType" "LoadingType"[],
    "optionDocuments" "Documents"[] DEFAULT ARRAY[]::"Documents"[],
    "optionDocumentsAdr" "DocumentsAdr",
    "userId" TEXT,
    "userName" TEXT,
    "userPhone" TEXT,
    "whatsapp" TEXT,
    "telegram" TEXT,
    "viber" TEXT,
    "skype" TEXT,
    "viewsId" TEXT,

    CONSTRAINT "transport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transport" ADD CONSTRAINT "transport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transport" ADD CONSTRAINT "transport_viewsId_fkey" FOREIGN KEY ("viewsId") REFERENCES "views"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wish_list" ADD CONSTRAINT "wish_list_transportId_fkey" FOREIGN KEY ("transportId") REFERENCES "transport"("id") ON DELETE CASCADE ON UPDATE CASCADE;
