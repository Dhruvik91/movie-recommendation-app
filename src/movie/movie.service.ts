import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ForbiddenException, Search } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MovieService {
 
  // Fetch Requested Data
  async getData(searchDto: any): Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1',
      params: {
        query: searchDto?.str,
        include_adult: searchDto?.adult || false,
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODg2MDcwN2I2N2M0ZGMyMWM2ZjAxY2I4OTA0NDk1MiIsInN1YiI6IjY1Yjc0ODI3MGNkMzJhMDE3Y2U3MTMzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.enVmFwz4fEFSR0zY58gzdxwylgKUQILCywopyNmKjK8',
      },
    };

    try {
      const res = await axios.request(options);
      return 'Done';
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
}
