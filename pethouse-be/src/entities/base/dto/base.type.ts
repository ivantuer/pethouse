import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseDocument } from '../base.entity';

@ObjectType()
export class BaseDocumentType implements BaseDocument {
  @Field(() => ID)
  id?: string;

  @Field(() => Date)
  createdAt?: Date;

  @Field(() => Date)
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int)
  version!: number;
}
