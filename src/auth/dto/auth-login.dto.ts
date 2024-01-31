import { IsBoolean, IsObject, IsString } from "class-validator";

export class LoginUserDto {
  
  @IsBoolean()
  isError: boolean;

  @IsString()
  message: String;

  @IsObject()
  data: object;

}
