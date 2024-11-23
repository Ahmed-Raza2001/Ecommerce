-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_orderId_fkey`;

-- AlterTable
ALTER TABLE `order` MODIFY `fullName` VARCHAR(191) NULL,
    MODIFY `phoneNumber` INTEGER NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `deliveryCharges` INTEGER NULL,
    MODIFY `city` VARCHAR(191) NULL;
