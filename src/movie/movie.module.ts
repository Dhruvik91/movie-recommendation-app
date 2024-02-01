import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      headers: {
        'X-RapidAPI-Key': 'd504879747mshb0a40ff4cc078adp1b5f63jsn6e0d3a9b9147',
        'X-RapidAPI-Host': 'imdb-movies-web-series-etc-search.p.rapidapi.com',
      }
    }),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
