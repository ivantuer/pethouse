import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateAnimalInput } from './dto/create-animal.input';
import { LinkAnimalInput } from './dto/link-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';
import AnimalType from './dto/animal.type';
import AnimalCrud from './animal.crud';
import { AnimalQueryInput } from './dto/query-animal.input';

@UseGuards(AuthGuard)
@Resolver()
export default class AnimalResolver {
  constructor(private readonly animalCrud: AnimalCrud) {}

  @Query(() => [AnimalType])
  async findAnimal(
    @Args('query') query: AnimalQueryInput,
  ): Promise<AnimalType[]> {
    return this.animalCrud.findAll(query);
  }

  @Query(() => [AnimalType])
  async findMyAnimal(
    @Args('query') query: AnimalQueryInput,
  ): Promise<AnimalType[]> {
    return this.animalCrud.findAllMy(query);
  }

  @Mutation(() => AnimalType)
  async createAnimal(
    @Args('createAnimalInput') createAnimalInput: CreateAnimalInput,
  ): Promise<AnimalType> {
    return this.animalCrud.create(createAnimalInput);
  }

  @Mutation(() => AnimalType)
  async updateAnimal(
    @Args('updateAnimalInput') updateAnimalInput: UpdateAnimalInput,
  ): Promise<AnimalType> {
    return this.animalCrud.update(updateAnimalInput);
  }

  @Mutation(() => Boolean)
  async deleteAnimal(
    @Args('deleteAnimalInput') deleteAnimalInput: LinkAnimalInput,
  ): Promise<boolean> {
    const deletedResult = await this.animalCrud.remove(deleteAnimalInput);
    return !!deletedResult.affected;
  }
}
