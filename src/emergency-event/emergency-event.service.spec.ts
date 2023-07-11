import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyEventService } from './emergency-event.service';

describe('EmergencyEventService', () => {
  let service: EmergencyEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmergencyEventService],
    }).compile();

    service = module.get<EmergencyEventService>(EmergencyEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
