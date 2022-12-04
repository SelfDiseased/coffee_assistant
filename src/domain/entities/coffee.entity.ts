import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Ingredient } from '@entities/ingredient.entity';
import { Taste } from '@entities/taste.entity';

@Entity({ name: 'coffee' })
export class Coffee {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  recipe: string;

  @Column()
  strength: number;

  @Column()
  kilocalories: number;

  @Column('decimal', {
    precision: 4,
    scale: 3,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => Number(value),
    },
  })
  volume: number;

  @ManyToMany(() => Ingredient, { cascade: ['insert'] })
  @JoinTable({ name: 'coffees_ingredients' })
  ingredients: Ingredient[];

  @ManyToMany(() => Taste, { cascade: ['insert'] })
  @JoinTable({ name: 'coffees_tastes' })
  tastes: Taste[];
}
