-- AlterTable
ALTER TABLE `order` ADD COLUMN `deliveryCharges` INTEGER NULL,
    ADD COLUMN `phoneNumber` INTEGER NULL,
    ADD COLUMN `total` INTEGER NOT NULL DEFAULT 0;
