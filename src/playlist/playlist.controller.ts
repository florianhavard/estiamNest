import { Controller, Get, Put, Param, Body, Post } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { Playlist } from 'src/entitys/playlist.entity';
import { DeepPartial } from 'typeorm';

@Controller('playlist/')
export class PlaylistController {
    constructor(readonly playlistService: PlaylistService) { }
    
    //Playlists
    @Get()
    getPlaylists(): Promise<Playlist[]> {
        return this.playlistService.getAllPlaylists();
    }

    @Get(':id')
    getPlaylist(@Param('id') playlistId: number): Promise<Playlist> {
        return this.playlistService.getPlaylist(playlistId);
    }

    @Post()
    createPlaylist(@Body() playlist: Omit<Playlist, 'id'| 'img'>): Promise<Playlist> {
        return this.playlistService.createPlaylist(playlist)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() playlist: Playlist): Promise<Playlist> {
        console.log(playlist)
        return this.playlistService.update(id, playlist);
    }
}
