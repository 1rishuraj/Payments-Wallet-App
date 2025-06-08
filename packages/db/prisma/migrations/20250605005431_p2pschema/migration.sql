-- CreateTable
CREATE TABLE "P2PTransfer" (
    "id" SERIAL NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "fromuserId" INTEGER NOT NULL,
    "touserId" INTEGER NOT NULL,

    CONSTRAINT "P2PTransfer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "P2PTransfer" ADD CONSTRAINT "P2PTransfer_fromuserId_fkey" FOREIGN KEY ("fromuserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "P2PTransfer" ADD CONSTRAINT "P2PTransfer_touserId_fkey" FOREIGN KEY ("touserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
