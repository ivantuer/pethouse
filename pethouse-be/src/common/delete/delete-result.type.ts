import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';

@ObjectType()
export class DeleteResultType implements DeleteResult {
  @Field(() => [String], { nullable: true })
  raw!: string[];

  @Field(() => Int, { nullable: true })
  affected?: number | null;
}
