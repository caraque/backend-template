import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  findAll(): User[] {
    return [];
  }

  findOne(id: string): User {
    /*...*/
    return {
      email: '',
      firstName: '',
      id: 0,
      isAdmin: false,
      lastName: '',
      password: '',
    };
  }

  create(usuario: CreateUserDto): User {
    return {
      email: '',
      firstName: '',
      id: 0,
      isAdmin: false,
      lastName: '',
      password: '',
    };
  }

  update(id: string, updateUsuarioDto: UpdateUserDto): User {
    return {
      email: '',
      firstName: '',
      id: 0,
      isAdmin: false,
      lastName: '',
      password: '',
    };
  }

  delete(id: string): void {
    /*...*/
  }
}
