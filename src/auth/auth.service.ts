import { ForbiddenException, Injectable } from '@nestjs/common';
import { loginDTO, regDTO } from './dto/index';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/Prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService, 
    private config: ConfigService
  ) {}

  async signIn(dto: loginDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    });
    if(!user) {
      throw new ForbiddenException("Invalid user email/password")
    }

    const gotMatch = bcrypt.compareSync(dto.password, user.password);
    if(!gotMatch) {
      throw new ForbiddenException("Invalid user email/password");
    }
    
    return this.signTokens(user.id, user.isAdmin);
  }
  
  async register(dto: regDTO) {
    const hash = bcrypt.hashSync(dto.password, Number(this.config.get("SALT")));
    try {
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          password: hash
        }
      });

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

  async signTokens(userId: string,isAdmin: boolean)
  : Promise<{access_token: string, refresh_token: string}> {   
    const access_options = {
    expiresIn: this.config.get("JWT_EXP"),
    secret: this.config.get("JWT_SECRET")
    }

    const new_jwtid = crypto.randomUUID();
    const refresh_options = {
      jwtid: new_jwtid,
      expiresIn: this.config.get("JWT_REFRESH_EXP"),
      secret: this.config.get("JWT_SECRET")
    } 
    const payload = {
      sub: userId,
      userType: isAdmin ? "admin" : "user"
    }

    await this.prisma.refresh.create({
      data: {
        jwt_id: new_jwtid,
        user_id: userId,
        expiresIn: this.config.get("JWT_REFRESH_EXP")
      }
    })

    const access_token = await this.jwt.signAsync(payload, access_options);
    const refresh_token = await this.jwt.signAsync(payload, refresh_options);

    return { access_token, refresh_token }
  }
}
