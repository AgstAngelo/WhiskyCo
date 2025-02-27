import { ForbiddenException, Injectable } from '@nestjs/common';
import { loginDTO } from './dto/index';
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

  async signIn(dto: loginDTO)
  : Promise<{access_token: string, refresh_token: string}> {
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
    
    return this.grantTokens(user.id, user.isAdmin);
  }

  async grantTokens(userId: string,isAdmin: boolean)
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

    const access_token = this.jwt.sign(payload, access_options)
    const refresh_token = this.jwt.sign(payload, refresh_options);

    this.insertRefresh(refresh_token);
    
    return { access_token, refresh_token }
  }
  
  async insertRefresh(refreshToken: string): Promise<void> {
    try {
      const payload = Object
      .fromEntries(
        Object.entries(
          this.jwt.decode(refreshToken)
      ));

      await this.prisma.refresh.create({
        data: {
          jwt_id: payload.jti,
          user_id: payload.sub,
          exp: payload.exp
        }
      });

    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async logout(userId: string): Promise<Object> {
    try {
      await this.prisma.refresh.delete({
        where: {
          user_id: userId
        }
      });
      return { message: "logout successfuly" };

    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
