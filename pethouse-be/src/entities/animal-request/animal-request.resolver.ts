import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateAnimalRequestInput } from './dto/create-animal-request.input';
import { LinkAnimalRequestInput } from './dto/link-animal-request.input';
import { UpdateAnimalRequestInput } from './dto/update-animal-request.input';
import AnimalRequestType from './dto/animal-request.type';
import AnimalRequestCrud from './animal-request.crud';
import { AnimalRequestQueryInput } from './dto/query-animal-request.input';

@UseGuards(AuthGuard)
@Resolver()
export default class AnimalRequestResolver {
  constructor(private readonly animalRequestCrud: AnimalRequestCrud) {}

  @Query(() => [AnimalRequestType])
  async findAnimalRequest(
    @Args('query') query: AnimalRequestQueryInput,
  ): Promise<AnimalRequestType[]> {
    return this.animalRequestCrud.findAll(query);
  }

  @Query(() => [AnimalRequestType])
  async findMyAnimalRequest(
    @Args('query') query: AnimalRequestQueryInput,
  ): Promise<AnimalRequestType[]> {
    return this.animalRequestCrud.findAllMy(query);
  }

  @Mutation(() => AnimalRequestType)
  async createAnimalRequest(
    @Args('createAnimalRequestInput')
    createAnimalRequestInput: CreateAnimalRequestInput,
  ): Promise<AnimalRequestType> {
    return this.animalRequestCrud.create(createAnimalRequestInput);
  }

  @Mutation(() => AnimalRequestType)
  async updateAnimalRequest(
    @Args('updateAnimalRequestInput')
    updateAnimalRequestInput: UpdateAnimalRequestInput,
  ): Promise<AnimalRequestType> {
    return this.animalRequestCrud.update(updateAnimalRequestInput);
  }

  @Mutation(() => Boolean)
  async deleteAnimalRequest(
    @Args('deleteAnimalRequestInput')
    deleteAnimalRequestInput: LinkAnimalRequestInput,
  ): Promise<boolean> {
    const deletedResult = await this.animalRequestCrud.remove(
      deleteAnimalRequestInput,
    );
    return !!deletedResult.affected;
  }
}
