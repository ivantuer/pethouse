import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { BaseDocument } from '../base.entity';

@InputType()
export class BaseDocumentInput implements BaseDocument {
  @Field(() => ID, { nullable: true })
  id!: string;

  @Field(() => Date, { nullable: true })
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  updatedAt!: Date;

  @Field(() => Date, { nullable: true })
  deletedAt!: Date;

  @Field(() => Int, { nullable: true })
  version!: number;
}
