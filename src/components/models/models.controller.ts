import { Controller, Post, Delete, Get, Param, Query, Body } from '@nestjs/common';
import { json } from 'express';
import { ModelsService } from './models.service';

@Controller('api/models')
export class ModelsController {

    constructor(
        private readonly modelsService: ModelsService
    ) { }



    @Get()
    async getModels(@Query() qs: any) {

        let x = await this.modelsService.getModels(qs.id);
        return x;
    }

    @Delete()
    deleteDatasource(@Query() qs: any) {
        return this.modelsService.deleteModel(qs.id);
    }

    @Post()
    postDatasources(@Body() body: any) {
        return this.modelsService.postModels(body);
    }


}
