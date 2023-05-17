import { Injectable } from '@nestjs/common';
import { loginDTO } from './dto/login.dto';

import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { regDTO } from './dto/reg.dto';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/Prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService, 
    private config: ConfigService
  ) {}

  async signIn(dto: loginDTO) {
    return dto;
  }
  
  async register(dto: regDTO) {
    return dto;
  }
}
