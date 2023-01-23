import { Controller, Get, Query } from '@nestjs/common';

import { CoffeeService } from '@services/coffee.service';
import { Coffee } from '@entities/coffee.entity';

@Controller('coffees')
export class CoffeeController {
  constructor(private coffeeService: CoffeeService) {}

  @Get()
  getAll(
    @Query('search') search: string,
    @Query('filterId') filterId: number,
  ): Promise<Coffee[]> {
    return this.coffeeService.getAll(search, filterId);
  }
}
