import { Param, Body, Controller, Get, Post, Patch, HttpCode } from "@nestjs/common"
import { userDTO } from "./dto/user.dto";
import { UserService } from "./user.service";
import { GetUser } from "src/decorators/user.decorator";
import { User } from "@prisma/client";

@Controller('user')
export class UserController {
  constructor(private userService: UserService){
  }
  @Post('register')
  @HttpCode(201)
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

  @Patch(":userid")
  @HttpCode(200)
  updateUser(@Param("userid") userId: string, @Body() user: userDTO) {
    return this.userService.updateUser(userId, user);
  }
}