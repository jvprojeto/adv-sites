/*
  Warnings:

  - You are about to drop the `Lead` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Lead";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,
    "whatsapp" TEXT,
    "cidade" TEXT,
    "logo" TEXT,
    "imagemLogo" TEXT,
    "imagemHero" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Site" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clienteId" TEXT NOT NULL,
    "template" TEXT NOT NULL DEFAULT 'premium',
    "slogan" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "publicado" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Site_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Area" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    CONSTRAINT "Area_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    CONSTRAINT "FAQ_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Depoimento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    CONSTRAINT "Depoimento_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_slug_key" ON "Cliente"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Site_clienteId_key" ON "Site"("clienteId");
