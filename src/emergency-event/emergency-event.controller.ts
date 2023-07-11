import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { EmergencyEventService } from './emergency-event.service';
import { CreateEmergencyEventDto } from './dto/create-emergency-event.dto';
import { UpdateEmergencyEventDto } from './dto/update-emergency-event.dto';
import { GetCommunitiesDto } from './dto/get-emergency-event.dto';
import { ChangeStatusDto } from './dto/change-status.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { EmergencyEvent } from './emergency-event.entity';

@Controller('emergency-event')
@ApiTags('Emergency-Event')
export class EmergencyEventController {
  constructor(private readonly service: EmergencyEventService) {}

  @Get()
  getAll(@Body() filter: GetCommunitiesDto): Promise<EmergencyEvent[]> {
    return this.service.get(filter);
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<EmergencyEvent> {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() dto: CreateEmergencyEventDto): Promise<EmergencyEvent> {
    return this.service.create(dto);
  }

  @ApiBody({ type: ChangeStatusDto })
  @Post(':id/status')
  async changeStatus(
    @Param('id') id: number,
    @Body() dto: ChangeStatusDto,
  ): Promise<EmergencyEvent> {
    return await this.service.changeStatus(id, dto.status);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdateEmergencyEventDto,
  ): Promise<EmergencyEvent> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
