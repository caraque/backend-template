import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '../users/user.entity';
import { CreateUserDto } from "../users/dto/user.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() request: { user: User }) {
    return this.authService.login(request.user);
  }

  @Post('create')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}
