/*
  Warnings:

  - A unique constraint covering the columns `[wisataId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Bookmark_wisataId_key` ON `Bookmark`(`wisataId`);
