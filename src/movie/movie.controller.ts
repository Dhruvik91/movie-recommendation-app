import {
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { AuthGuard } from 'src/auth/auth.guards';
import { SearchResponseDto } from './dto/response-search.dto';
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @UseGuards(AuthGuard)
  @Get('search/:name')
  getDetails(@Param("name") name: string): Promise<SearchResponseDto> {
    return this.movieService.getMovieData(name);
  }
}
