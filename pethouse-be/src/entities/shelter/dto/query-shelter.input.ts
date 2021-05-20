import { Field, InputType, PartialType } from '@nestjs/graphql';
import { EntityQueryInput } from 'src/common/entity.query/entity.query.input';
import { OrderDirection } from 'src/common/entity.query/order.direction.enum';
import { OrderInput } from 'src/entities/base/dto/base.order.input';
import { RequiredKeys } from 'src/types/requiredKeys.types';
import ShelterEntity from '../shelter.entity';
import ShelterInput from './shelter.input';

type ShelterOrderType = Record<RequiredKeys<ShelterEntity>, OrderDirection>;

@InputType()
class ShelterOrderPrepare extends OrderInput implements ShelterOrderType {
  @Field()
  title!: OrderDirection;

  @Field()
  phone!: OrderDirection;

  @Field()
  email!: OrderDirection;

  @Field()
  address!: OrderDirection;
}

@InputType()
class ShelterOrder extends PartialType(ShelterOrderPrepare) {}

@InputType()
class ShelterWhere extends PartialType(ShelterInput) {}

@InputType()
export class ShelterQueryInput extends EntityQueryInput {
  @Field(() => [String], { nullable: true })
  relations?: string[];

  @Field({ nullable: true })
  where?: ShelterWhere;

  @Field({ nullable: true })
  order?: ShelterOrder;
}
