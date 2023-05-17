import { IsBoolean } from "class-validator";
import { Length } from "class-validator";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

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