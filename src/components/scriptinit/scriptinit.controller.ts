import { Controller, Post, Delete, Get, Param, Query, Body } from '@nestjs/common';
import { ScriptinitService } from './scriptinit.service';

@Controller('api/scriptinit')
export class ScriptinitController {

    constructor(
        private readonly Scriptinitervice: ScriptinitService,
    ) { }


    @Get()
    getscriptinit(@Query() qs: any) {
        return this.Scriptinitervice.getScriptinit(qs.id);
    }

    // @Delete()
    // deleteDatasource(@Query() qs: any) {
    //     return this.Scriptinitervice.deleteDatasource(qs.id);
    // }


    @Post()
    postscriptinit(@Body() body: any) {
        return this.Scriptinitervice.postScriptinit(body);
    }



}
