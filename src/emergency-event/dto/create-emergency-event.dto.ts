import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { EmergencyEventType } from 'src/model/emergency-event-type.enum';

export class CreateEmergencyEventDto
  implements Readonly<CreateEmergencyEventDto>
{
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  description: string;

  @ApiProperty({ required: false })
  @Type(() => Number)
  @IsNumber()
  latitude: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  @IsNumber()
  longitude: number;

  @ApiProperty({ required: true })
  @IsString()
  city: string;

  @ApiPropertyOptional({ required: true })
  @Type(() => Number)
  @IsNumber()
  severity: number;

  @ApiProperty({ required: true, enum: EmergencyEventType })
  @IsEnum(EmergencyEventType)
  type: EmergencyEventType;
}
