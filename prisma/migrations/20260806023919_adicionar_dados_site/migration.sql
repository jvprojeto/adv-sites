-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Site" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clienteId" TEXT NOT NULL,
    "template" TEXT NOT NULL DEFAULT 'premium',
    "slogan" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "valor" REAL NOT NULL DEFAULT 0,
    "manutencao" REAL NOT NULL DEFAULT 0,
    "prazo" TEXT NOT NULL DEFAULT '7 dias',
    "oab" TEXT NOT NULL DEFAULT 'OAB/SP 123456',
    "anosExperiencia" TEXT NOT NULL DEFAULT '15',
    "especialidade" TEXT NOT NULL DEFAULT 'Advocacia Empresarial',
    "consulta" TEXT NOT NULL DEFAULT 'Primeira consulta',
    "endereco" TEXT NOT NULL DEFAULT 'São Paulo - SP',
    "publicado" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Site_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Site" ("clienteId", "descricao", "id", "manutencao", "prazo", "publicado", "slogan", "sobre", "template", "valor") SELECT "clienteId", "descricao", "id", "manutencao", "prazo", "publicado", "slogan", "sobre", "template", "valor" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
CREATE UNIQUE INDEX "Site_clienteId_key" ON "Site"("clienteId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
