import { IsString, IsNotEmpty } from 'class-validator';

import { Coffee } from '@entities/coffee.entity';
import { Ingredient } from '@entities/ingredient.entity';

export class CreateIngredientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  static toEntity(dto: CreateIngredientDto): Ingredient {
    const it = new Coffee();
    it.name = dto.name;
    return it;
  }

  static toEntities(dtos: CreateIngredientDto[]): Ingredient[] {
    return dtos.map((d) => CreateIngredientDto.toEntity(d));
  }
}
