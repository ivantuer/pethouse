import { Field, InputType, PartialType } from '@nestjs/graphql';
import { EntityQueryInput } from 'src/common/entity.query/entity.query.input';
import { OrderDirection } from 'src/common/entity.query/order.direction.enum';
import { OrderInput } from 'src/entities/base/dto/base.order.input';
import { RequiredKeys } from 'src/types/requiredKeys.types';
import AnimalEntity from '../animal.entity';
import AnimalInput from './animal.input';
// import { OrderInput } from '../../common/base.entity/dto/base.order.input';
// import { EntityQueryInput } from '../../common/entity.query/entity.query.input';
// import { OrderDirection } from '../../common/entity.query/order.direction.enum';
// import Animal from '../entities/Animal.entity';
// import AnimalInput from '../entities/Animal.input';
// import { RequiredKeys } from '../../../common/types/required-keys.type';

type AnimalOrderType = Record<RequiredKeys<AnimalEntity>, OrderDirection>;

@InputType()
class AnimalOrderPrepare extends OrderInput implements AnimalOrderType {
  @Field()
  creator!: OrderDirection;

  @Field()
  shelter!: OrderDirection;

  @Field()
  name!: OrderDirection;

  @Field()
  age!: OrderDirection;

  @Field()
  status!: OrderDirection;

  @Field()
  gender!: OrderDirection;

  @Field()
  isSterilized: OrderDirection;

  @Field()
  weight: OrderDirection;

  @Field()
  height: OrderDirection;

  @Field()
  color: OrderDirection;

  @Field()
  description: OrderDirection;

  @Field()
  imageUrl: OrderDirection;

  @Field()
  type: OrderDirection;
}

@InputType()
class AnimalOrder extends PartialType(AnimalOrderPrepare) {}

@InputType()
class AnimalWhere extends PartialType(AnimalInput) {}

@InputType()
export class AnimalQueryInput extends EntityQueryInput {
  @Field(() => [String], { nullable: true })
  relations?: string[];

  @Field({ nullable: true })
  where?: AnimalWhere;

  @Field({ nullable: true })
  order?: AnimalOrder;
}
