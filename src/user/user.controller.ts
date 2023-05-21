import { Param, Body, Controller, Get, Post } from "@nestjs/common"
import { userDTO } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor(private userService: UserService){
  }
  @Post('register')
  register(@Body() dto: userDTO) {
    return this.userService.register(dto);
  }
  
  @Get("all")
  findAll() {
    return this.userService.findAll();
  }
  
  @Get(":userid")
  findOne(@Param("userid") userId: string) {
    return this.userService.findOne(userId);
  }
  
}