import { IsEmail, IsNotEmpty, MinLength, MaxLength, Length, IsBoolean, IsOptional, IsUUID, IsDate } from "class-validator";


export class userDTO {
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
  @MinLength(8)
  @MaxLength(12)
  password: string

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean
}