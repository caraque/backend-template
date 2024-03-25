import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      delete user.password;
      return user;
    }
    return;
  }

  async login(user: User) {
    const payload = { email: user.email, name: user.firstName };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
