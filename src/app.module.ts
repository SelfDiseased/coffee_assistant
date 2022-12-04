import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from '@config/configuration';
import { CoffeeModule } from '@infrastructure/coffee/module';

@Module({
  imports: [TypeOrmModule.forRoot(configuration().database), CoffeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
