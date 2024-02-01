import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { SearchResponseDto } from './dto/response-search.dto';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  // Find Anything Here
  async getMovieData(name: any): Promise<SearchResponseDto> {
    const makeStr: string = name?.str.split(' ').join('');
    try {
      const result: any = ( await this.httpService.axiosRef.get(
        `https://imdb-movies-web-series-etc-search.p.rapidapi.com/${ makeStr }.json`
      ) ).data;

      if (result.d.length == 0) {
        throw new BadRequestException();
      }
      const map = new Map();
      let count: number = 1;
      for (let i: number = 0; i < result.d.length; i++) {
        map.set(count, { show: result.d[i]['l'], cast: result.d[i]['s'] });
        count++;
      }

      const searchedData: string[] = Array.from(map.values());

      return {
        isError: false,
        message: 'Data Fetched Successfully',
        data: searchedData,
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }
}
