import { Field, InputType, PartialType } from '@nestjs/graphql';
import { EntityQueryInput } from 'src/common/entity.query/entity.query.input';
import { OrderDirection } from 'src/common/entity.query/order.direction.enum';
import { OrderInput } from 'src/entities/base/dto/base.order.input';
import { RequiredKeys } from 'src/types/requiredKeys.types';
import UserEntity from '../user.entity';
import UserInput from './user.input';

type UserOrderType = Record<RequiredKeys<UserEntity>, OrderDirection>;

@InputType()
class UserOrderPrepare extends OrderInput implements UserOrderType {
  @Field()
  email!: OrderDirection;

  @Field()
  firstName!: OrderDirection;

  @Field()
  lastName!: OrderDirection;

  @Field()
  phone!: OrderDirection;

  @Field()
  jobPosition!: OrderDirection;

  @Field()
  role!: OrderDirection;

  @Field()
  createdAt!: OrderDirection;

  @Field()
  updatedAt!: OrderDirection;

  @Field()
  deletedAt!: OrderDirection;

  @Field()
  version!: OrderDirection;

  @Field()
  shelter!: OrderDirection;
}

@InputType()
class UserOrder extends PartialType(UserOrderPrepare) {}

@InputType()
class UserWhere extends PartialType(UserInput) {}

@InputType()
export class UserQueryInput extends EntityQueryInput {
  @Field(() => [String], { nullable: true })
  relations?: string[];

  @Field({ nullable: true })
  where?: UserWhere;

  @Field({ nullable: true })
  order?: UserOrder;
}
