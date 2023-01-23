import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

import { Coffee } from '@entities/coffee.entity';
import { Ingredient } from '@root/domain/entities/ingredient.entity';
import { CreateIngredientDto } from '../ingredient/create-ingredient.dto';
import { CreateTasteDto } from '../taste/create-taste.dto';

export class CreateCoffeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  recipe: string;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(10)
  strength: number;

  @IsNotEmpty()
  @IsNumber()
  volume: number;

  @IsNotEmpty()
  @IsNumber()
  kilocalories: number;

  ingredients: CreateIngredientDto[];

  tastes: CreateTasteDto[];

  static toEntity(dto: CreateCoffeeDto): Coffee {
    const it = new Coffee();
    it.name = dto.name;
    it.recipe = dto.recipe;
    it.imageUrl = dto.imageUrl;
    it.strength = dto.strength;
    it.volume = dto.volume;
    it.kilocalories = dto.kilocalories;
    it.ingredients = CreateIngredientDto.toEntities(dto.ingredients);
    it.tastes = CreateTasteDto.toEntities(dto.tastes);
    return it;
  }

  static toEntities(dtos: CreateCoffeeDto[]): Coffee[] {
    return dtos.map((d) => CreateCoffeeDto.toEntity(d));
  }
}
