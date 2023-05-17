/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `refresh` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `refresh` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX `refresh_jwt_id_user_id_key` ON `refresh`;

-- AlterTable
ALTER TABLE `refresh` ADD COLUMN `id` CHAR(36) NOT NULL,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `refresh_user_id_key` ON `refresh`(`user_id`);

-- AddForeignKey
ALTER TABLE `refresh` ADD CONSTRAINT `refresh_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
