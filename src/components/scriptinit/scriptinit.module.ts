import { Module } from '@nestjs/common';
import { ScriptinitService } from './scriptinit.service';
import { ScriptinitController } from './scriptinit.controller';

@Module({
    controllers: [ScriptinitController],
    providers: [ScriptinitService]
})
export class ScriptinitModule { }
