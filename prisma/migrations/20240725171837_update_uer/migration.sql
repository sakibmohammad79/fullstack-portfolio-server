/*
  Warnings:

  - You are about to drop the column `intruduction` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "intruduction",
ADD COLUMN     "introduction" TEXT;
