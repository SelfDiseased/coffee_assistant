import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeeController } from '@controllers/coffee.controller';
import { Coffee } from '@entities/coffee.entity';
import { CoffeeService } from '@services/coffee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee]), HttpModule],
  providers: [CoffeeService],
  controllers: [CoffeeController],
})
export class CoffeeModule {}
