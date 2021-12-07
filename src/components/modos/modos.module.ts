import { Module } from '@nestjs/common';
import { ModosController } from './modos.controller';
import { ModosService } from './modos.service';

@Module({
  controllers: [ModosController],
  providers: [ModosService]
})
export class ModosModule { }
