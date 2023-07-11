import { EntityStatus } from 'src/model/entity-status.enum';
import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangeStatusDto implements Readonly<ChangeStatusDto> {
  @ApiProperty({ required: true, enum: EntityStatus })
  @IsEnum(EntityStatus)
  status: EntityStatus;
}
