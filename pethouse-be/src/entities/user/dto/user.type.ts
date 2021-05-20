import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseDocumentType } from 'src/entities/base/dto/base.type';
import { PartialShelterType } from 'src/entities/shelter/dto/partial-shelter.type';
import { UserRoleEnum } from '../role.enum';
import UserEntity from '../user.entity';

@ObjectType()
export default class UserType extends BaseDocumentType implements UserEntity {
  @Field()
  email!: string;

  @Field({ nullable: true })
  firstName!: string;

  @Field({ nullable: true })
  lastName!: string;

  @Field({ nullable: true })
  phone!: string;

  @Field({ nullable: true })
  jobPosition!: string;

  @Field(() => UserRoleEnum, { nullable: true })
  role!: UserRoleEnum;

  @Field(() => Date)
  createdAt?: Date;

  @Field(() => Date)
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int)
  version!: number;

  @Field({ nullable: true })
  shelter!: PartialShelterType;
}
