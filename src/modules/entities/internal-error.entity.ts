import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class InternalError {
  @ApiProperty()
  @Column()
  statusCode: string;

  @ApiProperty()
  @Column()
  message: string;
}
