/*
  Warnings:

  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `options` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `items` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `options` DROP FOREIGN KEY `Options_itemId_fkey`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `items` JSON NOT NULL;

-- DropTable
DROP TABLE `item`;

-- DropTable
DROP TABLE `options`;
