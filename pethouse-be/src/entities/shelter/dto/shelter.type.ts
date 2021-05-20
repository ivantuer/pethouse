import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDocumentType } from 'src/entities/base/dto/base.type';
import ShelterEntity from '../shelter.entity';

@ObjectType()
export default class ShelterType extends BaseDocumentType
  implements ShelterEntity {
  @Field({ nullable: true })
  title!: string;

  @Field({ nullable: true })
  address!: string;

  @Field({ nullable: true })
  phone!: string;

  @Field({ nullable: true })
  email!: string;
}
