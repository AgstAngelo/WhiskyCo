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

export class regDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @Length(11, 11)
  cpf: string

  @IsNotEmpty()
  @Length(11, 11)
  phone: string

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(12)
  password: string
}