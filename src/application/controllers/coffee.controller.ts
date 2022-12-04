import { Controller, Get } from '@nestjs/common';

import { CoffeeService } from '@services/coffee.service';
import { Coffee } from '@entities/coffee.entity';

@Controller('coffees')
export class CoffeeController {
  constructor(private coffeeService: CoffeeService) {}

  @Get()
  getAll(): Promise<Coffee[]> {
    return this.coffeeService.getAll();
  }
}
