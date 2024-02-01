import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): /*  Observable<any> | Promise<Observable<any>> */ any {
    const req: Request = context.switchToHttp().getRequest<Request>();
    const res: Response = context.switchToHttp().getResponse<Response>();

    const startTime: number = Date.now();

    return next.handle().pipe(
      tap(() => {
        const endTime: number = Date.now();
        const restTime: number = endTime - startTime;
        console.log(
          `${req.method} and ${req.path} and ${res.statusCode} and time=${restTime}`,
        );
      }),
    );
  }
}
