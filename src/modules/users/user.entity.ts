import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 150, type: 'string' })
  email: string;

  @Column({ length: 150, type: 'text' })
  password: string;

  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;
}
