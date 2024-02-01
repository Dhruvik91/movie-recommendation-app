import { PartialType } from '@nestjs/mapped-types';
import { SearchDto } from './search-movie.dto';

export class UpdateMovieDto extends PartialType(SearchDto) {}
