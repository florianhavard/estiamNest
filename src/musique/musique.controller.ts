import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MusiqueService } from './musique.service';
import { Musique } from 'src/entitys/musique.entity';

@Controller('musique')
export class MusiqueController {
    constructor(readonly musiqueService: MusiqueService) {}

    //Musiques
    @Get('')
    getMusiques():Promise<Musique[]>{
        return this.musiqueService.getAllMusiques();
    }

    @Get('/:id')
    getMusique(@Param('id') musiqueId: number):Promise<Musique>{
        return this.musiqueService.getMusique(musiqueId);
    }

    @Post('')
    createMusique(@Body() musique: Omit<Musique, 'id'| 'img'>): Promise<Musique> {
           return this.musiqueService.createMusique(musique)
       }

}
