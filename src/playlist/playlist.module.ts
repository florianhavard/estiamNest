import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musique } from 'src/entitys/musique.entity';
import { Playlist } from 'src/entitys/playlist.entity';
import { PlaylistService } from './playlist.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Musique]),
    TypeOrmModule.forFeature([Playlist])],
  providers: [PlaylistService],
  controllers: [PlaylistController],
})
export class PlaylistModule {}
