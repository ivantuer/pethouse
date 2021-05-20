import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDocumentType } from 'src/entities/base/dto/base.type';
import { PartialShelterType } from 'src/entities/shelter/dto/partial-shelter.type';
import { PartialUserType } from 'src/entities/user/dto/partial-user.type';
import AnimalEntity from '../animal.entity';
import {
  AnimalColorEnum,
  AnimalGenderEnum,
  AnimalStatusEnum,
  AnimalTypeEnum,
} from '../enums/status.enum';

@ObjectType()
export default class AnimalType extends BaseDocumentType
  implements AnimalEntity {
  @Field({ nullable: false })
  creator!: PartialUserType;

  @Field({ nullable: true })
  shelter!: PartialShelterType;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: true })
  age!: number;

  @Field(() => AnimalStatusEnum, { nullable: true })
  status!: AnimalStatusEnum;

  @Field(() => AnimalGenderEnum, { nullable: true })
  gender!: AnimalGenderEnum;

  @Field({ nullable: true })
  isSterilized: boolean;

  @Field({ nullable: true })
  weight: number;

  @Field({ nullable: true })
  height: number;

  @Field(() => AnimalColorEnum, { nullable: true })
  color: AnimalColorEnum;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  imageUrl: string;

  @Field(() => AnimalTypeEnum, { nullable: true })
  type: AnimalTypeEnum;
}
