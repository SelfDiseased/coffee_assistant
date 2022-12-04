import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Coffee } from '@entities/coffee.entity';
import { Repository } from 'typeorm';
import { DeepgramService } from './deepgram.service';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    private readonly deepgramService: DeepgramService,
  ) {}

  async getAll(): Promise<Coffee[]> {
    await this.deepgramService.getAllWords();
    return this.coffeeRepository.find({ relations: ['ingredients', 'tastes'] });
  }
}
