/*
  Warnings:

  - You are about to drop the column `grade` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "grade",
DROP COLUMN "review";

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_bookId_key" ON "Review"("bookId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
