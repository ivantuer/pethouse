import { FindManyOptions, Repository } from 'typeorm';

export const findAndCount = async <T>(
  repository: Repository<T>,
  query: FindManyOptions<T>,
): Promise<{ items: T[]; count: number }> => {
  const [items, count] = await repository.findAndCount(query);
  return {
    items,
    count,
  };
};
