import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyEventController } from './emergency-event.controller';

describe('EmergencyEventController', () => {
  let controller: EmergencyEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencyEventController],
    }).compile();

    controller = module.get<EmergencyEventController>(EmergencyEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
