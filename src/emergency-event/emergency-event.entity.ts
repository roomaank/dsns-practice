import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/model/entities/base-entity';
import { Category } from 'src/category/category.entity';

@Entity({ name: 'emergency_event' })
export class EmergencyEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true, type: 'numeric' })
  latitude: string;

  @Column({ nullable: true, type: 'numeric' })
  longitude: string;

  @Column()
  city: string;

  @ManyToOne(() => Category, (category) => category.emergencyEvents)
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
