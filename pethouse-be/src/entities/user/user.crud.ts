import { BadRequestException, Injectable } from '@nestjs/common';
import { RequestUserService } from 'src/services/requestUser/requestUser.service';
import { Connection, DeleteResult, Repository } from 'typeorm';
import ShelterEntity from '../shelter/shelter.entity';
import { CreateUserInput } from './dto/create-user.input';
import { LinkUserInput } from './dto/link-user.input';
import { UserQueryInput } from './dto/query-user.input';
import {
  UpdateUserInput,
  UpdateUserShelterInput,
} from './dto/update-user.input';
// import UserInput from './dto/user.input';
import UserType from './dto/user.type';
import { UserRoleEnum } from './role.enum';
import UserEntity from './user.entity';

@Injectable()
export default class UserCrud {
  private readonly repository: Repository<UserEntity>;

  constructor(
    private readonly connection: Connection,
    private readonly requestUserService: RequestUserService,
  ) {
    this.repository = this.connection.getRepository(UserEntity);
  }

  async findAll(query: UserQueryInput): Promise<UserType[]> {
    return this.repository.find(query);
  }

  async findAvailableToInvite(query: UserQueryInput): Promise<UserType[]> {
    return this.repository.find({
      ...query,
      where: { ...(query.where || {}), shelter: { id: null } },
    });
  }

  async me(): Promise<UserType> {
    const id = this.requestUserService.userId;
    console.log(id);
    return this.repository.findOne(id, { relations: ['shelter'] });
  }

  async updateMy(user: UpdateUserInput): Promise<UserType> {
    const id = this.requestUserService.userId;

    return this.repository.save({
      id,
      ...user,
    });
  }

  async updateOrInviteUserShelter(
    user: UpdateUserShelterInput,
  ): Promise<UserType> {
    const owner = await this.repository.findOne(
      this.requestUserService.userId,
      { relations: ['shelter'] },
    );

    console.log(owner);

    if (owner.role !== UserRoleEnum.ShelterAdmin) {
      throw new BadRequestException('Permission denied');
    }

    return this.repository.save({
      id: user.id,
      shelter: owner.shelter,
      role: user.role,
    });
  }

  async deleteUserFromShelter(user: LinkUserInput): Promise<UserType> {
    const owner = await this.repository.findOne(
      this.requestUserService.userId,
      { relations: ['shelter'] },
    );

    if (owner.role !== UserRoleEnum.ShelterAdmin) {
      throw new BadRequestException('Permission denied');
    }

    return this.repository.save({
      id: user.id,
      shelter: null,
      role: UserRoleEnum.User,
    });
  }

  async create(user: CreateUserInput): Promise<UserType> {
    return this.repository.save(user);
  }

  async update(user: UpdateUserInput): Promise<UserType> {
    if (user.shelter) {
      user.shelter = (await this.connection.manager.findOne(
        ShelterEntity,
        user.shelter.id,
      )) as any;
    }

    console.log(user);

    return this.repository.save({ id: user.id, ...user });
  }

  async remove(user: LinkUserInput): Promise<DeleteResult> {
    return this.repository.softDelete(user);
  }
}
