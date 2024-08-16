import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  @Column()
  access_token: string;
}
