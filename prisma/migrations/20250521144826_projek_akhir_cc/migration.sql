/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `wisata` table. All the data in the column will be lost.
  - You are about to drop the column `tipe` on the `wisata` table. All the data in the column will be lost.
  - You are about to alter the column `rating_wisata` on the `wisata` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `foto_wisata` to the `Wisata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategori_wisata` to the `Wisata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `wisata` DROP COLUMN `imageUrl`,
    DROP COLUMN `tipe`,
    ADD COLUMN `foto_wisata` VARCHAR(191) NOT NULL,
    ADD COLUMN `kategori_wisata` ENUM('pegunungan', 'perairan', 'budaya', 'kuliner') NOT NULL,
    MODIFY `rating_wisata` DOUBLE NOT NULL;
