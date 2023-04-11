import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Musique } from 'src/entitys/musique.entity';

@Injectable()
export class MusiqueService {
    constructor(
        @InjectRepository(Musique)
        private musiquesRepository: Repository<Musique>,
    ) { }

    // fonctions de recherche en BDD
    findAll(): Promise<Musique[]> {
        return this.musiquesRepository.find()
    }

    findOne(id: number): Promise<Musique | null> {
        return this.musiquesRepository.findOne({
            where: { id: id },
        });
    }

    // fonction API
    getAllMusiques(): Promise<Musique[]> {
        return this.findAll();
    };

    getMusique(id: number): Promise<Musique> {
        const musique = this.findOne(id)
        if (!musique) {
            throw new NotFoundException(`le produit ${'id'} n existe pas`);
        }
        return musique;
    };

    createMusique(musique: Omit<Musique, 'id'| 'img'>):Promise<Musique> {
        const newMusique = {
            ...musique,
            img:`https://picsum.photos/id/${Math.floor(Math.random()*500+1)}`
        }

        return this.musiquesRepository.save(newMusique)
    }

}
