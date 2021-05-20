import { Injectable } from '@nestjs/common';
import { Connection, DeleteResult, Repository } from 'typeorm';
import { CreateAnimalInput } from './dto/create-animal.input';
import { LinkAnimalInput } from './dto/link-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';
// import AnimalInput from './dto/animal.input';
import AnimalType from './dto/animal.type';
import AnimalEntity from './animal.entity';
import UserEntity from '../user/user.entity';
import ShelterEntity from '../shelter/shelter.entity';
import { RequestUserService } from 'src/services/requestUser/requestUser.service';
import { AnimalQueryInput } from './dto/query-animal.input';

@Injectable()
export default class AnimalCrud {
  private readonly repository: Repository<AnimalEntity>;
  // private readonly connection: Connection;

  constructor(
    private readonly connection: Connection,
    private readonly requestUserService: RequestUserService,
  ) {
    this.repository = this.connection.getRepository(AnimalEntity);
  }

  async findAll(query: AnimalQueryInput): Promise<AnimalType[]> {
    return this.repository.find(query);
  }

  async findAllMy(query: AnimalQueryInput): Promise<AnimalType[]> {
    query.where = query.where || {};
    query.where.creator = (await this.connection.manager.findOne(UserEntity, {
      id: this.requestUserService.userId,
    })) as any;

    return this.repository.find(query);
  }

  async create(animal: CreateAnimalInput): Promise<AnimalType> {
    animal.creator = (await this.connection.manager.findOne(
      UserEntity,
      this.requestUserService.userId,
    )) as any;

    if (animal.shelter) {
      animal.shelter = this.connection.manager.create(
        ShelterEntity,
        animal.shelter,
      ) as any;
    }

    const createdAnimal = await this.repository.save(animal);
    console.log(createdAnimal);
    return createdAnimal;
  }

  async update(animal: UpdateAnimalInput): Promise<AnimalType> {
    const preloadAnimal = await this.repository.preload({
      ...animal,
    });

    return this.repository.save(preloadAnimal);
  }

  async remove(animal: LinkAnimalInput): Promise<DeleteResult> {
    return this.repository.softDelete(animal);
  }
}
