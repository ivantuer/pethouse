import { MaxLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import ShelterEntity from '../shelter/shelter.entity';
import { UserRoleEnum } from './role.enum';

@Entity('user')
export default class UserEntity {
  @Column({ name: 'email' })
  @Index({ unique: true })
  email: string;

  @Column('character varying', { name: 'first_name', default: '' })
  firstName: string;

  @Column('character varying', { name: 'last_name', default: '' })
  @MaxLength(100)
  lastName: string;

  @Column('character varying', { name: 'phone', default: '' })
  @MaxLength(25)
  phone: string;

  @Column('character varying', { name: 'job_position', default: '' })
  @MaxLength(25)
  jobPosition: string;

  @Column('enum', {
    name: 'role',
    default: UserRoleEnum.User,
    enum: UserRoleEnum,
  })
  @MaxLength(25)
  role: UserRoleEnum;

  @ManyToOne(
    () => ShelterEntity,
    (shelter: ShelterEntity) => shelter,
    { nullable: true },
  )
  @JoinColumn({ name: 'shelter' })
  shelter: Partial<ShelterEntity>;

  @PrimaryColumn('uuid')
  id?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @VersionColumn({ name: 'version' })
  version!: number;
}
