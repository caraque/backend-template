import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ValidateUserDto {
  @ApiProperty()
  @IsEmail()
  @MaxLength(150)
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  password: string;
}
