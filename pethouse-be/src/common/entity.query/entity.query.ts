import { FindConditions, FindOneOptions } from 'typeorm';
import { EntityQueryInput } from './entity.query.input';
import { OrderDirection } from './order.direction.enum';
import { SearchInput } from './entity.query.input';

export const defaultPageSize = 20;

export default class EntityQuery<TEntity> {
  relations?: FindOneOptions<TEntity>['relations'] = [];

  where?: FindOneOptions<TEntity>['where'] = {};

  order?: FindOneOptions<TEntity>['order'];

  search?: SearchInput = { query: '' };

  like?: string = '';

  skip?: number = 0;

  take?: number = defaultPageSize;

  constructor(query?: EntityQueryInput) {
    if (query) {
      this.relations = query.relations;
      this.like = query.like;
      this.search = query.search;
      this.skip = query.skip;
      this.take = query.take;
      this.order = query.order as {
        [P in keyof TEntity]?: OrderDirection;
      };
      this.where = query.where as FindConditions<TEntity>;
    }
  }
}
