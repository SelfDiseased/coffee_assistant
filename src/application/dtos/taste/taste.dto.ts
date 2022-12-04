import { Taste } from '@entities/taste.entity';

export class TasteDto {
  id: number;
  name: string;

  static fromEntity(entity: Taste): TasteDto {
    const it = new TasteDto();
    it.id = entity.id;
    it.name = entity.name;
    return it;
  }

  static fromEntities(entities: Taste[]): TasteDto[] {
    return entities.map((e) => TasteDto.fromEntity(e));
  }
}
