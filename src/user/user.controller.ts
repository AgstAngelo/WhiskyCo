import { Body, Controller, Post } from "@nestjs/common"
import { userDTO } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private userService: UserService){

  }
}