import { MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import AnimalEntity from '../animal/animal.entity';
import { BaseDocument } from '../base/base.entity';
import UserEntity from '../user/user.entity';
import { AnimalRequestStatusEnum } from './enums/status.enum';

@Entity('animal_request')
export default class AnimalRequestEntity extends BaseDocument {
  @ManyToOne(
    () => UserEntity,
    (currentOwner: UserEntity) => currentOwner,
    { nullable: false, cascade: true },
  )
  @JoinColumn({ name: 'currentOwner' })
  currentOwner: Partial<UserEntity>;

  @ManyToOne(
    () => UserEntity,
    (futureOwner: UserEntity) => futureOwner,
    { nullable: true },
  )
  @JoinColumn({ name: 'futureOwner' })
  futureOwner: Partial<UserEntity>;

  @ManyToOne(
    () => AnimalEntity,
    (animal: AnimalEntity) => animal,
    { nullable: true },
  )
  @JoinColumn({ name: 'animal' })
  animal: Partial<AnimalEntity>;

  @Column('enum', {
    name: 'status',
    default: AnimalRequestStatusEnum.Open,
    enum: AnimalRequestStatusEnum,
  })
  @MaxLength(25)
  status: AnimalRequestStatusEnum;
}
