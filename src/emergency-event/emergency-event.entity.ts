import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'src/model/entities/base-entity';
import { EmergencyEventType } from 'src/model/emergency-event-type.enum';
import { EntityStatus } from 'src/model/entity-status.enum';

@Entity({ name: 'emergency_event' })
export class EmergencyEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('enum', { enum: EntityStatus, default: EntityStatus.ACTIVE })
  status: EntityStatus;

  @Column()
  description: string;

  @Column({ nullable: true, type: 'numeric' })
  latitude: number;

  @Column({ nullable: true, type: 'numeric' })
  longitude: number;

  @Column()
  city: string;

  @Column()
  severity: number;

  @Column({
    type: 'enum',
    enum: EmergencyEventType,
    nullable: false,
  })
  type: EmergencyEventType;
}
