import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BasePaginationType {
  @Field()
  count!: number;
}
