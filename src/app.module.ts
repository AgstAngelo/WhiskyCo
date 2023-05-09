import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule],
})

export class AppModule {}
