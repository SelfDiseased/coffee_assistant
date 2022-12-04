import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ingredient' })
export class Ingredient {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}
