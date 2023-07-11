import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { EmergencyEventType } from 'src/model/emergency-event-type.enum';
import { EntityStatus } from 'src/model/entity-status.enum';
import { PaginateDto } from 'src/shared/dto/paginate.dto';

export class GetCommunitiesDto
  extends PaginateDto
  implements Readonly<GetCommunitiesDto>
{
  @ApiProperty({ required: true, enum: EntityStatus })
  @IsEnum(EntityStatus)
  status: EntityStatus;

  @ApiProperty({ required: false, enum: EmergencyEventType })
  @IsEnum(EmergencyEventType)
  type: EmergencyEventType;

  @ApiProperty({ required: false })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  severity: string;
}
