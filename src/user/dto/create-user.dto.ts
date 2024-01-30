import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: String;

  @IsString()
  password: String;

  @IsEmail()
  email: String;
}
