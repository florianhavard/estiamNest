import { Module } from '@nestjs/common';
import { MusiqueController } from './musique.controller';
import { MusiqueService } from './musique.service';
import { Musique } from 'src/entitys/musique.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from 'src/entitys/playlist.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Musique]),
    TypeOrmModule.forFeature([Playlist])],
  providers: [MusiqueService],
  controllers: [MusiqueController],
})
export class MusiqueModule {}
