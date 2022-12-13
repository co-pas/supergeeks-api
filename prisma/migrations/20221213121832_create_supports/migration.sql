-- CreateTable
CREATE TABLE "supports" (
    "id" TEXT NOT NULL,
    "id_client" INTEGER NOT NULL,
    "dialog" TEXT NOT NULL,
    "answered" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supports_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "supports" ADD CONSTRAINT "supports_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
