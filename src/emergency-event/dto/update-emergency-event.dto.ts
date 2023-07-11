import { PartialType } from '@nestjs/swagger';
import { CreateEmergencyEventDto } from './create-emergency-event.dto';

export class UpdateEmergencyEventDto extends PartialType(
  CreateEmergencyEventDto,
) {}
