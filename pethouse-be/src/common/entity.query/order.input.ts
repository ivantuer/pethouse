import { Field, InputType } from '@nestjs/graphql';
import { OrderDirection } from './order.direction.enum';

@InputType()
export class OrderInput {
  @Field(() => OrderDirection)
  method!: OrderDirection;

  @Field()
  filed!: string;
}
