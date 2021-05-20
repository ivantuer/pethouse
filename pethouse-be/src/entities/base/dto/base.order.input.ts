import { Field, InputType } from '@nestjs/graphql';
import { OrderDirection } from 'src/common/entity.query/order.direction.enum';
import { BaseDocument } from '../base.entity';

type OrderType = Record<keyof BaseDocument, OrderDirection>;

@InputType()
export class OrderInput implements Partial<OrderType> {
  @Field(() => OrderDirection, { nullable: true })
  id!: OrderDirection;

  @Field(() => OrderDirection, { nullable: true })
  createdAt!: OrderDirection;

  @Field(() => OrderDirection, { nullable: true })
  deletedAt!: OrderDirection;

  @Field(() => OrderDirection, { nullable: true })
  updatedAt!: OrderDirection;

  @Field(() => OrderDirection, { nullable: true })
  version!: OrderDirection;
}
