import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmergencyEvent } from './emergency-event.entity';
import { CreateEmergencyEventDto } from './dto/create-emergency-event.dto';
import { UpdateEmergencyEventDto } from './dto/update-emergency-event.dto';
import { GetCommunitiesDto } from './dto/get-emergency-event.dto';
import { EntityStatus } from 'src/model/entity-status.enum';

@Injectable()
export class EmergencyEventService {
  constructor(
    @InjectRepository(EmergencyEvent)
    private readonly repo: Repository<EmergencyEvent>,
  ) {}

  async get(filter: GetCommunitiesDto): Promise<EmergencyEvent[]> {
    const queryBuilder = this.repo.createQueryBuilder('emergencyEvent');

    if (filter.status) {
      queryBuilder.andWhere('emergencyEvent.status = :status', {
        status: filter.status,
      });
    }

    if (filter.type) {
      queryBuilder.andWhere('emergencyEvent.type = :type', {
        type: filter.type,
      });
    }

    if (filter.name) {
      queryBuilder.andWhere('emergencyEvent.name LIKE :name', {
        name: `%${filter.name}%`,
      });
    }

    if (filter.severity) {
      queryBuilder.andWhere('emergencyEvent.severity = :severity', {
        severity: filter.severity,
      });
    }

    return queryBuilder.getMany();
  }

  async getById(id: number): Promise<EmergencyEvent> {
    return this.repo.findOne({ where: { id } });
  }

  async create(dto: CreateEmergencyEventDto): Promise<EmergencyEvent> {
    const emergencyEvent = this.repo.create(dto);
    return this.repo.save(emergencyEvent);
  }

  async update(
    id: any,
    updateEmergencyEventDto: UpdateEmergencyEventDto,
  ): Promise<EmergencyEvent> {
    const existingEvent = await this.repo.findOne(id);

    if (!existingEvent) {
      throw new NotFoundException('Emergency event not found');
    }

    await this.repo.update(
      { id },
      {
        ...existingEvent,
        ...updateEmergencyEventDto,
      },
    );

    return this.repo.findOne({ where: { id } });
  }

  async changeStatus(
    id: number,
    status: EntityStatus,
  ): Promise<EmergencyEvent> {
    const emergencyEvent = await this.repo.findOne({ where: { id } });

    if (!emergencyEvent) {
      throw new ForbiddenException(`No such brand`);
    }

    await this.repo.update({ id }, { status });
    await emergencyEvent.reload();

    return emergencyEvent;
  }

  async delete(id: number): Promise<void> {
    const result = await this.repo.softDelete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Emergency event not found');
    }
  }
}
