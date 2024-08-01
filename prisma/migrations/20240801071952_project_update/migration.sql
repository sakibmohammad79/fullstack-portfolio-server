-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "repoClientUrl" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "repoServerUrl" TEXT NOT NULL DEFAULT '';
