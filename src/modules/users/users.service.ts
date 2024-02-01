import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        isAdmin: true,
      },
    });
  }

  findOne(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }

  create(user: CreateUserDto): Promise<User> {
    const userCreation = this.userRepository.create(user);
    return this.userRepository.save(userCreation);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({ where: { id: id } });
  }

  async delete(id: string): Promise<string> {
    const deleteResult = await this.userRepository.delete(id);
    return deleteResult.affected ? 'OK' : 'FAIL';
  }
}
