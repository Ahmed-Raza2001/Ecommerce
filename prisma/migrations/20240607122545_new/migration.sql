/*
  Warnings:

  - You are about to drop the column `createdAt` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `item` table. All the data in the column will be lost.
  - Added the required column `itemRemarks` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `item` DROP COLUMN `createdAt`,
    DROP COLUMN `orderId`,
    DROP COLUMN `published`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `itemRemarks` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Options` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `itemId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Options` ADD CONSTRAINT `Options_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
