import 'module-alias/register';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import configuration from '@config/configuration';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configuration().port);
}
bootstrap();
