import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/guards/auth.guard';
import { DeleteResult } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { LinkUserInput } from './dto/link-user.input';
import { UserQueryInput } from './dto/query-user.input';
import {
  UpdateMyUserInput,
  UpdateUserInput,
  UpdateUserShelterInput,
} from './dto/update-user.input';
import UserType from './dto/user.type';
import UserCrud from './user.crud';

@UseGuards(AuthGuard)
@Resolver()
export default class UserResolver {
  constructor(private readonly userCrud: UserCrud) {}

  @Query(() => [UserType])
  async findUser(@Args('query') query: UserQueryInput): Promise<UserType[]> {
    return this.userCrud.findAll(query);
  }

  // @Query(() => [UserType])
  // async findAvailableToInviteUser(
  //   @Args('query') query: UserQueryInput,
  // ): Promise<UserType[]> {
  //   return this.userCrud.findAll(query);
  // }

  @Query(() => UserType)
  async me(): Promise<UserType> {
    return this.userCrud.me();
  }

  @Mutation(() => UserType)
  async updateMyUser(
    @Args('updateUserInput') updateUserInput: UpdateMyUserInput,
  ): Promise<UserType> {
    return this.userCrud.updateMy(updateUserInput);
  }
  @Mutation(() => UserType)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserType> {
    return this.userCrud.create(createUserInput);
  }

  @Mutation(() => UserType)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<UserType> {
    return this.userCrud.update(updateUserInput);
  }

  @Mutation(() => UserType)
  async updateUserShelter(
    @Args('updateUserShelterInput')
    updateUserShelterInput: UpdateUserShelterInput,
  ): Promise<UserType> {
    return this.userCrud.updateOrInviteUserShelter(updateUserShelterInput);
  }

  @Mutation(() => UserType)
  async deleteUserFromShelter(
    @Args('deleteUserFromShelterInput')
    deleteUserFromShelterInput: LinkUserInput,
  ): Promise<UserType> {
    return this.userCrud.deleteUserFromShelter(deleteUserFromShelterInput);
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Args('deleteUserInput') deleteUserInput: LinkUserInput,
  ): Promise<boolean> {
    const deletedResult = await this.userCrud.remove(deleteUserInput);
    return !!deletedResult.affected;
  }
}
