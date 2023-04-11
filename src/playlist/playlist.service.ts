import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Playlist } from 'src/entitys/playlist.entity';

@Injectable()
export class PlaylistService {
    constructor(
        @InjectRepository(Playlist)
        private playlistsRepository: Repository<Playlist>,
    ) { }

    // fonctions de recherche en BDD
    findAll(): Promise<Playlist[]> {
        return this.playlistsRepository.find({ relations: { musiques: true, }, })
    }

    findOne(id: number): Promise<Playlist | null> {
        return this.playlistsRepository.findOne({
            where: { id: id },
            relations: { musiques: true, },
        });
    }

    // fonction API
    getAllPlaylists(): Promise<Playlist[]> {
        return this.findAll();
    };

    getPlaylist(id: number): Promise<Playlist> {
        const playlist = this.findOne(id)
        if (!playlist) {
            throw new NotFoundException(`la playlist ${'id'} n existe pas`);
        }
        return playlist;
    };

    createPlaylist(playlist: Omit<Playlist, 'id' | 'img'>): Promise<Playlist> {
        const newPlaylist = {
            ...playlist,
            img: `https://picsum.photos/id/${Math.floor(Math.random() * 500 + 1)}`
        }

        return this.playlistsRepository.save(newPlaylist)
    }

    update(id: number, playlist: Playlist): Promise<Playlist> {
        const searchplaylist = this.findOne(id )
        if (!searchplaylist) {
            throw new NotFoundException(`la playlist ${'id'} que vous essayez d'update n existe pas`);
        }
        playlist.id = id
        return this.playlistsRepository.save(playlist);
    }

}
