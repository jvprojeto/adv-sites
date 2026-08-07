/*
  Warnings:

  - You are about to drop the column `publicado` on the `Cliente` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
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
INSERT INTO "new_Cliente" ("cidade", "criadoEm", "email", "id", "imagemHero", "imagemLogo", "logo", "nome", "slug", "telefone", "whatsapp") SELECT "cidade", "criadoEm", "email", "id", "imagemHero", "imagemLogo", "logo", "nome", "slug", "telefone", "whatsapp" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE UNIQUE INDEX "Cliente_slug_key" ON "Cliente"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
