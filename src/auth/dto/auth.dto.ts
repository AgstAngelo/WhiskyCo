import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";
import { IsBoolean } from "class-validator";
import { Length } from "class-validator";

export class loginDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(12)
  password: string
}