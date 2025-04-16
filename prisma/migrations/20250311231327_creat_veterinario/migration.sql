-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "nomedoproduto" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" INTEGER NOT NULL,
    "cliente" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);
