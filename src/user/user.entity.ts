import { EntityStatus } from 'src/model/entity-status.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar', nullable: false, default: '' })
  email: string;

  @Exclude()
  @Column({ type: 'varchar' })
  password: string;

  @Column('enum', { enum: EntityStatus, default: EntityStatus.ACTIVE })
  status: EntityStatus;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'varchar', nullable: true })
  avatar: string;
}
