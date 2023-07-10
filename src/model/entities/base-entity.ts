import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity as TypeORMBaseEntity,
  DeleteDateColumn,
} from 'typeorm';

export abstract class BaseEntity extends TypeORMBaseEntity {
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column({ nullable: true })
  createdBy: number;

  @Column({ nullable: true })
  updatedBy: number;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;

  @Column({ nullable: true })
  deletedBy: number;

  @Column({ nullable: true })
  lastIP: string;
}
