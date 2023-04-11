import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MusiqueModule } from './musique/musique.module';
import { PlaylistModule } from './playlist/playlist.module';
import { Musique } from './entitys/musique.entity';
import { Playlist } from './entitys/playlist.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestfinalproject',
      entities: [Musique, Playlist,],
      synchronize: true
    }),
    MusiqueModule, PlaylistModule],
  exports: [TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
 }
