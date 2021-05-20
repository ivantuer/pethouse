import { Field, InputType } from '@nestjs/graphql';
import { BaseDocumentInput } from 'src/entities/base/dto/base.input';
import { LinkShelterInput } from 'src/entities/shelter/dto/link-shelter.input';
import { LinkUserInput } from 'src/entities/user/dto/link-user.input';
import AnimalEntity from '../animal.entity';
import {
  AnimalColorEnum,
  AnimalGenderEnum,
  AnimalStatusEnum,
  AnimalTypeEnum,
} from '../enums/status.enum';

@InputType()
export default class AnimalInput extends BaseDocumentInput
  implements AnimalEntity {
  @Field()
  creator!: LinkUserInput;

  @Field()
  shelter!: LinkShelterInput;

  @Field()
  name!: string;

  @Field()
  age!: number;

  @Field(() => AnimalStatusEnum)
  status!: AnimalStatusEnum;

  @Field(() => AnimalGenderEnum)
  gender!: AnimalGenderEnum;

  @Field()
  isSterilized: boolean;

  @Field()
  weight: number;

  @Field()
  height: number;

  @Field(() => AnimalColorEnum)
  color: AnimalColorEnum;

  @Field()
  description: string;

  @Field()
  imageUrl: string;

  @Field(() => AnimalTypeEnum)
  type: AnimalTypeEnum;
}
