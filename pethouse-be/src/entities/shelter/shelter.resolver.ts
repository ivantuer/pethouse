import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateShelterInput } from './dto/create-shelter.input';
import { LinkShelterInput } from './dto/link-shelter.input';
import { UpdateShelterInput } from './dto/update-shelter.input';
import ShelterType from './dto/shelter.type';
import ShelterCrud from './shelter.crud';
import { ShelterQueryInput } from './dto/query-shelter.input';

@UseGuards(AuthGuard)
@Resolver()
export default class ShelterResolver {
  constructor(private readonly shelterCrud: ShelterCrud) {}

  @Query(() => [ShelterType])
  async findShelter(
    @Args('query') query: ShelterQueryInput,
  ): Promise<ShelterType[]> {
    return this.shelterCrud.findAll(query);
  }

  @Mutation(() => ShelterType)
  async createShelter(
    @Args('createShelterInput') createShelterInput: CreateShelterInput,
  ): Promise<ShelterType> {
    return this.shelterCrud.create(createShelterInput);
  }

  @Mutation(() => ShelterType)
  async updateShelter(
    @Args('updateShelterInput') updateShelterInput: UpdateShelterInput,
  ): Promise<ShelterType> {
    return this.shelterCrud.update(updateShelterInput);
  }

  @Mutation(() => Boolean)
  async deleteShelter(
    @Args('deleteShelterInput') deleteShelterInput: LinkShelterInput,
  ): Promise<boolean> {
    const deletedResult = await this.shelterCrud.remove(deleteShelterInput);
    return !!deletedResult.affected;
  }
}
