import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ValidateUserDto {
  @IsEmail()
  @MaxLength(150)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  password: string;
}
