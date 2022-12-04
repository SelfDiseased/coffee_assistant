import { Ingredient } from '@entities/ingredient.entity';

export class IngredientDto {
  id: number;
  name: string;

  static fromEntity(entity: Ingredient): IngredientDto {
    const it = new IngredientDto();
    it.id = entity.id;
    it.name = entity.name;
    return it;
  }

  static fromEntities(entities: Ingredient[]): IngredientDto[] {
    return entities.map((e) => IngredientDto.fromEntity(e));
  }
}
