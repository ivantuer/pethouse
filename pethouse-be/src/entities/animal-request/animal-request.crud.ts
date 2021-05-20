import { Injectable } from '@nestjs/common';
import { Connection, DeleteResult, Repository } from 'typeorm';
import { CreateAnimalRequestInput } from './dto/create-animal-request.input';
import { LinkAnimalRequestInput } from './dto/link-animal-request.input';
import { UpdateAnimalRequestInput } from './dto/update-animal-request.input';
// import AnimalRequestInput from './dto/animalRequest.input';
import AnimalRequestType from './dto/animal-request.type';
import AnimalRequestEntity from './animal-request.entity';
import UserEntity from '../user/user.entity';
import ShelterEntity from '../shelter/shelter.entity';
import { RequestUserService } from 'src/services/requestUser/requestUser.service';
import { AnimalRequestQueryInput } from './dto/query-animal-request.input';

@Injectable()
export default class AnimalRequestCrud {
  private readonly repository: Repository<AnimalRequestEntity>;
  // private readonly connection: Connection;

  constructor(
    private readonly connection: Connection,
    private readonly requestUserService: RequestUserService,
  ) {
    this.repository = this.connection.getRepository(AnimalRequestEntity);
  }

  async findAll(query: AnimalRequestQueryInput): Promise<AnimalRequestType[]> {
    return this.repository.find(query);
  }

  async findAllMy(
    query: AnimalRequestQueryInput,
  ): Promise<AnimalRequestType[]> {
    return this.repository.find(query);
  }

  async create(
    animalRequest: CreateAnimalRequestInput,
  ): Promise<AnimalRequestType> {
    const createdAnimalRequest = await this.repository.save(animalRequest);
    return createdAnimalRequest;
  }

  async update(
    animalRequest: UpdateAnimalRequestInput,
  ): Promise<AnimalRequestType> {
    const preloadAnimalRequest = await this.repository.preload({
      ...animalRequest,
    });

    return this.repository.save(preloadAnimalRequest);
  }

  async remove(animalRequest: LinkAnimalRequestInput): Promise<DeleteResult> {
    return this.repository.softDelete(animalRequest);
  }
}
