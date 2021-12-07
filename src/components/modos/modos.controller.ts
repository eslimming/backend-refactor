import { Controller, Post, Delete, Get, Param, Query, Body } from '@nestjs/common';
import { json } from 'express';
import { ModosService } from './modos.service';

@Controller('api/Modos')
export class ModosController {

    constructor(
        private readonly ModosService: ModosService
    ) { }



    @Get()
    async getModos(@Query() qs: any) {

        let x = await this.ModosService.getModos(qs.id);
        return x;
    }

    // @Delete()
    // deleteDatasource(@Query() qs: any) {
    //     return this.ModosService.deleteModel(qs.id);
    // }

    // @Post()
    // postDatasources(@Body() body: any) {
    //     return this.ModosService.postModos(body);
    // }


}
