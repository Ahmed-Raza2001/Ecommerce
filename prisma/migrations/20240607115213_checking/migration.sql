/*
  Warnings:

  - You are about to drop the column `address` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryCharges` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryInstructions` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `landmark` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `orderType` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `order` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Item_orderId_fkey` ON `item`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `address`,
    DROP COLUMN `city`,
    DROP COLUMN `deliveryCharges`,
    DROP COLUMN `deliveryInstructions`,
    DROP COLUMN `email`,
    DROP COLUMN `fullName`,
    DROP COLUMN `landmark`,
    DROP COLUMN `orderType`,
    DROP COLUMN `phoneNumber`,
    DROP COLUMN `total`;
