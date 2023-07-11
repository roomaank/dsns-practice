import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { IsString } from 'class-validator';
import { SortOrder } from 'src/model/order.enum';

export class SortDto implements Readonly<SortDto> {
  @ApiProperty({ required: false })
  @IsString()
  sortBy: string;

  @ApiProperty({ required: false })
  @IsString()
  sortOrder: SortOrder;
}
