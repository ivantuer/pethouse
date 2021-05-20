import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchInput {
  @Field()
  query: string;
}

export const defaultPageSize = 20;

@InputType()
export abstract class EntityQueryInput {
  @Field(() => [String], { nullable: true })
  abstract relations?: string[] = [];

  @Field()
  like?: string = '';

  @Field()
  skip?: number = 0;

  @Field()
  take?: number = defaultPageSize;

  @Field()
  search?: SearchInput = { query: '' };

  abstract where?: unknown;

  abstract order?: unknown;

  @Field()
  startFrom?: string = '';
}
