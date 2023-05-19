import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDTO, regDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @Post('login')
  signIn(@Body() dto: loginDTO) {
    return this.authService.signIn(dto);
  
  }
  @Post('register')
  register(@Body() dto: regDTO) {
    return this.authService.register(dto);
  }
}
