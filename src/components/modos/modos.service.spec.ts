import { Test, TestingModule } from '@nestjs/testing';
import { ModosService } from './modos.service';

describe('ModosService', () => {
  let service: ModosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModosService],
    }).compile();

    service = module.get<ModosService>(ModosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
