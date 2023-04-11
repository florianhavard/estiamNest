import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Musique {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  img?: string;

  @Column()
  path: string;

}