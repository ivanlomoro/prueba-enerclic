-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "padreId" INTEGER,
    "tipo" INTEGER NOT NULL,
    "numserie" INTEGER NOT NULL,
    CONSTRAINT "Dispositivo_padreId_fkey" FOREIGN KEY ("padreId") REFERENCES "Dispositivo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
