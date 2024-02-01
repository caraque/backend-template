import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @MaxLength(150)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  isAdmin: boolean;
}

export class UpdateUserDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @MaxLength(150)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  isAdmin: boolean;
}
