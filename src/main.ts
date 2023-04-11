import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {ValidationPipe} from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalPipes(new ValidationPipe({
  ///  whitelist: true,
  //  forbidNonWhitelisted: true,
  //}));
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204, 
    credentials: true,
  };
  app.enableCors(corsOptions);
  await app.listen(3010);
}
bootstrap();
