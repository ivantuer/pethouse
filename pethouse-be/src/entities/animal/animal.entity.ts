import { MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseDocument } from '../base/base.entity';
import ShelterEntity from '../shelter/shelter.entity';
import UserEntity from '../user/user.entity';
import AnimalType from './dto/animal.type';
import {
  AnimalColorEnum,
  AnimalGenderEnum,
  AnimalStatusEnum,
  AnimalTypeEnum,
} from './enums/status.enum';

@Entity('animal')
export default class AnimalEntity extends BaseDocument {
  @ManyToOne(
    () => UserEntity,
    (creator: UserEntity) => creator,
    { nullable: false, cascade: true },
  )
  @JoinColumn({ name: 'creator' })
  creator: Partial<UserEntity>;

  @ManyToOne(
    () => ShelterEntity,
    (shelter: ShelterEntity) => shelter,
    { nullable: true },
  )
  @JoinColumn({ name: 'shelter' })
  shelter: Partial<ShelterEntity>;

  @Column('character varying', { name: 'name', default: '' })
  name: string;

  @Column('float', { name: 'age', default: 0 })
  age: number;

  @Column('enum', {
    name: 'status',
    default: AnimalStatusEnum.InShelter,
    enum: AnimalStatusEnum,
  })
  @MaxLength(25)
  status: AnimalStatusEnum;

  @Column('enum', {
    name: 'gender',
    default: AnimalGenderEnum.Male,
    enum: AnimalGenderEnum,
  })
  @MaxLength(25)
  gender: AnimalGenderEnum;

  @Column('bool', { name: 'is_sterilized', default: false })
  isSterilized: boolean;

  @Column('float', { name: 'weight', default: 0 })
  weight: number;

  @Column('float', { name: 'height', default: 0 })
  height: number;

  @Column('character varying', { name: 'description', default: '' })
  description: string;

  @Column('character varying', { name: 'image_url', default: '' })
  imageUrl: string;

  @Column('enum', {
    name: 'color',
    nullable: true,
    enum: AnimalColorEnum,
  })
  @MaxLength(25)
  color: AnimalColorEnum;

  @Column('enum', {
    name: 'type',
    default: AnimalTypeEnum.Other,
    enum: AnimalTypeEnum,
  })
  @MaxLength(25)
  type: AnimalTypeEnum;
}
