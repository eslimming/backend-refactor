import { Controller, Post, Delete, Get, Param, Query, Body } from '@nestjs/common';
import { json } from 'express';
import { DatasourcesService } from './datasources.service';

@Controller('api/datasources')
export class DatasourcesController {

    constructor(
        private readonly datasourceService: DatasourcesService,
    ) { }


    @Get()
    getDatasources(@Query() qs: any) {
        return this.datasourceService.getDatasources(qs.id);
    }

    @Delete()
    deleteDatasource(@Query() qs: any) {
        return this.datasourceService.deleteDatasource(qs.id);
    }

    // @Post()
    // postDatasources(@Body() body: any) {
    //     return this.datasourceService.getDatasources(body.id);
    // }

    @Post()
    postDatasources(@Body() body: any) {
        return this.datasourceService.postModels(body);
    }



}
