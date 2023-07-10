import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmergencyEvent } from 'src/emergency-event/emergency-event.entity';
import { EmergencyEventType } from 'src/model/emergency-event-type.enum';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: EmergencyEventType,
    nullable: false,
  })
  type: EmergencyEventType;

  @OneToMany(
    () => EmergencyEvent,
    (emergencyEvent) => emergencyEvent.category,
    {
      onDelete: 'CASCADE',
    },
  )
  emergencyEvents: EmergencyEvent[];
}
