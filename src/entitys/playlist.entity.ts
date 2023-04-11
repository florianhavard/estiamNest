import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, } from 'typeorm';
import { Musique } from './musique.entity';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @ManyToMany(() => Musique)
  @JoinTable()
  musiques?: Musique[]
}