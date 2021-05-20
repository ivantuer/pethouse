import { Field, InputType } from '@nestjs/graphql';
import { BaseDocumentInput } from 'src/entities/base/dto/base.input';
import ShelterEntity from '../shelter.entity';

@InputType()
export default class ShelterInput extends BaseDocumentInput
  implements ShelterEntity {
  @Field()
  title!: string;

  @Field()
  address!: string;

  @Field()
  phone!: string;

  @Field()
  email!: string;
}
