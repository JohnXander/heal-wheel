-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mind" INTEGER NOT NULL,
    "body" INTEGER NOT NULL,
    "social" INTEGER NOT NULL,
    "work" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "advice" TEXT NOT NULL,

    CONSTRAINT "Advice_pkey" PRIMARY KEY ("id")
);
