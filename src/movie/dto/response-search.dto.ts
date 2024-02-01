import { IsArray, IsBoolean, IsString } from 'class-validator';

export class SearchResponseDto {
  @IsBoolean()
  isError: Boolean;

  @IsString()
  message: String;

  @IsArray()
  data: string[];
}
