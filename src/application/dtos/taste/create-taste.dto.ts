import { IsString, IsNotEmpty } from 'class-validator';

import { Coffee } from '@entities/coffee.entity';
import { Taste } from '@root/domain/entities/taste.entity';

export class CreateTasteDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  static toEntity(dto: CreateTasteDto): Taste {
    const it = new Coffee();
    it.name = dto.name;
    return it;
  }

  static toEntities(dtos: CreateTasteDto[]): Taste[] {
    return dtos.map((d) => CreateTasteDto.toEntity(d));
  }
}
