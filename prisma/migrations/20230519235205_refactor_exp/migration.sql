/*
  Warnings:

  - You are about to drop the column `expiresIn` on the `refresh` table. All the data in the column will be lost.
  - Added the required column `exp` to the `refresh` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `addresses` DROP FOREIGN KEY `addresses_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `order_items_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `order_items_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_brand_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `refresh` DROP FOREIGN KEY `refresh_user_id_fkey`;

-- AlterTable
ALTER TABLE `refresh` DROP COLUMN `expiresIn`,
    ADD COLUMN `exp` INTEGER UNSIGNED NOT NULL;
