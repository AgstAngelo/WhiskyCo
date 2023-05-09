import { Injectable } from '@nestjs/common';
import { loginDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  signIn(dto: loginDTO) {
    return dto;
  }
}
