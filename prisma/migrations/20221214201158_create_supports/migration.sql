-- CreateTable
CREATE TABLE "supports" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "dialog" TEXT NOT NULL,
    "stage" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "supports_number_key" ON "supports"("number");
