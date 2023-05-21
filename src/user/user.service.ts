import { Injectable, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/Prisma/prisma.service';
import { userDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService
  ) {}

  async register(dto: userDTO): Promise<userDTO> {
    const hash = bcrypt.hashSync(dto.password, Number(this.config.get("SALT")));
    try {
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          password: hash
        }
      });

      delete user.password;
      return user;

    } catch (error) {
      if(error.code === "P2002") {
        throw new ForbiddenException(
          `Constraint Violation: ${
            error.meta.target.split("_")[1]
          } already in use.`
        );
      }
    }
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if(!user) {
      throw new ForbiddenException("user not found");
    }
    
    return user;
  }
}
