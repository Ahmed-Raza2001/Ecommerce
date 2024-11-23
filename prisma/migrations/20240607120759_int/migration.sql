/*
  Warnings:

  - Made the column `area` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fullName` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deliveryCharges` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `grandTotal` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `area` VARCHAR(191) NOT NULL,
    MODIFY `address` VARCHAR(191) NOT NULL,
    MODIFY `city` VARCHAR(191) NOT NULL,
    MODIFY `fullName` VARCHAR(191) NOT NULL,
    MODIFY `deliveryCharges` INTEGER NOT NULL,
    MODIFY `phoneNumber` VARCHAR(191) NOT NULL,
    MODIFY `total` INTEGER NOT NULL,
    MODIFY `grandTotal` INTEGER NOT NULL;
