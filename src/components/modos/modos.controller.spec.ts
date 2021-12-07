import { Test, TestingModule } from '@nestjs/testing';
import { ModosController } from './modos.controller';

describe('ModelsController', () => {
  let controller: ModosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModosController],
    }).compile();

    controller = module.get<ModosController>(ModosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
