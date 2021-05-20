import { Field, InputType } from '@nestjs/graphql';
import { PartialAnimalType } from 'src/entities/animal/dto/partial-animal.type';
import { BaseDocumentInput } from 'src/entities/base/dto/base.input';
import { PartialUserType } from 'src/entities/user/dto/partial-user.type';
import AnimalRequestEntity from '../animal-request.entity';
import { AnimalRequestStatusEnum } from '../enums/status.enum';

@InputType()
export default class AnimalRequestInput extends BaseDocumentInput
  implements AnimalRequestEntity {
  @Field(() => PartialUserType)
  currentOwner!: PartialUserType;

  @Field(() => PartialUserType)
  futureOwner!: PartialUserType;

  @Field(() => PartialAnimalType)
  animal!: PartialAnimalType;

  @Field(() => AnimalRequestStatusEnum)
  status!: AnimalRequestStatusEnum;
}
