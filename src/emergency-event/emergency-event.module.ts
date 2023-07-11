import { Module } from '@nestjs/common';
import { EmergencyEventController } from './emergency-event.controller';
import { EmergencyEventService } from './emergency-event.service';
import { EmergencyEvent } from './emergency-event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmergencyEvent])],
  controllers: [EmergencyEventController],
  providers: [EmergencyEventService],
  exports: [EmergencyEventService],
})
export class EmergencyEventModule {}
