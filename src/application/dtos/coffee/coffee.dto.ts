import { Ingredient } from '@entities/ingredient.entity';
import { Taste } from '@entities/taste.entity';
import { Coffee } from '@entities/coffee.entity';

export class CoffeeDto {
  id: number;
  name: string;
  recipe: string;
  imageUrl: string;
  strength: number;
  volume: number;
  kilocalories: number;
  ingredients: Ingredient[];
  tastes: Taste[];

  static fromEntity(entity: Coffee): CoffeeDto {
    const it = new CoffeeDto();
    it.id = entity.id;
    it.name = entity.name;
    it.recipe = entity.recipe;
    it.imageUrl = entity.imageUrl;
    it.strength = entity.strength;
    it.volume = entity.volume;
    it.kilocalories = entity.kilocalories;
    it.ingredients = entity.ingredients;
    it.tastes = entity.tastes;
    return it;
  }

  static fromEntities(entities: Coffee[]): CoffeeDto[] {
    return entities.map((e) => CoffeeDto.fromEntity(e));
  }
}
