import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Coffee } from '@entities/coffee.entity';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async getAll(search: string, filterId: number): Promise<Coffee[]> {
    const propertiesObj: Record<number, keyof Coffee> = {
      1: 'name',
      2: 'recipe',
      3: 'ingredients',
      4: 'tastes',
      5: 'strength',
    };

    if (search?.length) {
      search = search.replace('/\\+/', ' ');
      search = search.replace(' and ', ',');
      search = search.replace(' and ', ',');
    }

    const property = propertiesObj[filterId] || '';

    return this.coffeeRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.tastes', 'tastes')
      .leftJoinAndSelect('c.ingredients', 'ingredients')
      .where(property == 'name' ? `c.name ILIKE '%${search}%'` : 'true')
      .andWhere(property == 'recipe' ? `c.recipe ILIKE '%${search}%'` : 'true')
      .andWhere(
        property == 'ingredients'
          ? 'ingredients.name IN (:...ingredients)'
          : 'true',
        {
          ingredients: search?.split(','),
        },
      )
      .andWhere(property == 'tastes' ? 'tastes.name IN (:...tastes)' : 'true', {
        tastes: search?.split(','),
      })
      .andWhere(
        property == 'strength' && search !== undefined
          ? 'c.strength = :strength'
          : 'true',
        {
          strength: +search,
        },
      )
      .getMany();
  }
}
