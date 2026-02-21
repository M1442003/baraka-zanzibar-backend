import { IsString, IsEmail, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class LoginDto {
  @IsEmail()
  @Type(() => String)
  email: string;

  @IsString()
  @MinLength(6)
  @Type(() => String)
  password: string;
}
