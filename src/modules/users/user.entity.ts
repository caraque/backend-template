import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";

@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 50 })
  firstName: string;

  @ApiProperty()
  @Column({ length: 50 })
  lastName: string;

  @ApiProperty()
  @Column({ length: 150, type: 'varchar', unique: true })
  email: string;

  @ApiProperty()
  @Column({ length: 150, type: 'varchar' })
  password?: string;

  @ApiProperty()
  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;
}
