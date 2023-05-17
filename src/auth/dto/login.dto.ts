import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";

export class loginDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(12)
  password: string
}