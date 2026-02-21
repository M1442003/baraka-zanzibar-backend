import { Controller, Post, Body, Get, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('test')
  test() {
    return { message: 'Auth controller is working' };
  }

  @Post('test-body')
  testBody(@Body() body: any) {
    console.log('Raw body received:', body);
    return { received: body };
  }

  @Post('register')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async register(@Body() registerDto: RegisterDto) {
    console.log('Register DTO in controller:', registerDto);
    return this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
