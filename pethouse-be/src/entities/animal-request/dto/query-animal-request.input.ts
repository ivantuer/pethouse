import { Field, InputType, PartialType } from '@nestjs/graphql';
import { EntityQueryInput } from 'src/common/entity.query/entity.query.input';
import { OrderDirection } from 'src/common/entity.query/order.direction.enum';
import { OrderInput } from 'src/entities/base/dto/base.order.input';
import { RequiredKeys } from 'src/types/requiredKeys.types';
import AnimalRequestEntity from '../animal-request.entity';
import AnimalRequestInput from './animal-request.input';

type AnimalRequestOrderType = Record<
  RequiredKeys<AnimalRequestEntity>,
  OrderDirection
>;

@InputType()
class AnimalRequestOrderPrepare extends OrderInput
  implements AnimalRequestOrderType {
  @Field()
  currentOwner!: OrderDirection;

  @Field()
  futureOwner!: OrderDirection;

  @Field()
  animal!: OrderDirection;

  @Field()
  status!: OrderDirection;
}

@InputType()
class AnimalRequestOrder extends PartialType(AnimalRequestOrderPrepare) {}

@InputType()
class AnimalRequestWhere extends PartialType(AnimalRequestInput) {}

@InputType()
export class AnimalRequestQueryInput extends EntityQueryInput {
  @Field(() => [String], { nullable: true })
  relations?: string[];

  @Field({ nullable: true })
  where?: AnimalRequestWhere;

  @Field({ nullable: true })
  order?: AnimalRequestOrder;
}
