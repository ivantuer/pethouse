import { Field, ObjectType } from '@nestjs/graphql';
import { PartialAnimalType } from 'src/entities/animal/dto/partial-animal.type';
import { BaseDocumentType } from 'src/entities/base/dto/base.type';
import { PartialUserType } from 'src/entities/user/dto/partial-user.type';
import AnimalRequestEntity from '../animal-request.entity';
import { AnimalRequestStatusEnum } from '../enums/status.enum';

@ObjectType()
export default class AnimalRequestType extends BaseDocumentType
  implements AnimalRequestEntity {
  @Field({ nullable: false })
  currentOwner!: PartialUserType;

  @Field({ nullable: false })
  futureOwner!: PartialUserType;

  @Field({ nullable: false })
  animal!: PartialAnimalType;

  @Field({ nullable: false })
  status!: AnimalRequestStatusEnum;
}
