import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.module';
import { PrismaModule } from './Prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    PrismaModule],
})

export class AppModule {}
