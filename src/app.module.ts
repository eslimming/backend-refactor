import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatasourcesController } from './components/datasources/datasources.controller';
import { DatasourcesService } from './components/datasources/datasources.service';
import { DatasourcesModule } from './components/datasources/datasources.module';
import { ModelsModule } from './components/models/models.module';
import { ModosModule } from './components/modos/modos.module';

// Modules

@Module({
  imports: [DatasourcesModule, ModelsModule, ModosModule],
  controllers: [AppController, DatasourcesController],
  providers: [AppService, DatasourcesService],
})
export class AppModule { }

