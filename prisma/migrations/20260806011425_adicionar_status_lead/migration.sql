-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lead" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "email" TEXT,
    "escritorio" TEXT,
    "tipoSite" TEXT,
    "mensagem" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Novo',
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Lead" ("criadoEm", "email", "escritorio", "id", "mensagem", "nome", "tipoSite", "whatsapp") SELECT "criadoEm", "email", "escritorio", "id", "mensagem", "nome", "tipoSite", "whatsapp" FROM "Lead";
DROP TABLE "Lead";
ALTER TABLE "new_Lead" RENAME TO "Lead";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
