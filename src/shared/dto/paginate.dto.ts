import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { SortDto } from './sort.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginateDto
  extends SortDto
  implements IPaginationOptions, Readonly<PaginateDto>
{
  @ApiProperty({ required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  limit: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  page: number;
}
