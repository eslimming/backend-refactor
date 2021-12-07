import { Module } from '@nestjs/common';
import {DatasourcesService} from './datasources.service';
import {DatasourcesController} from './datasources.controller';

@Module({
    controllers: [DatasourcesController],
    providers: [DatasourcesService]
})
export class DatasourcesModule {}
