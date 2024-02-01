import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 150, type: 'varchar', unique: true })
  email: string;

  @Column({ length: 150, type: 'varchar' })
  password?: string;

  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;
}
