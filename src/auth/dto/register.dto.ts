import { IsString, IsEmail, MinLength, MaxLength, Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class RegisterDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @Type(() => String)
  name: string;

  @IsEmail()
  @Type(() => String)
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number or special character',
  })
  @Type(() => String)
  password: string;
}
