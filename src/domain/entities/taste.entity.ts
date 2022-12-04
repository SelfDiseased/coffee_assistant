import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'taste' })
export class Taste {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}
