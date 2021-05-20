import { Injectable } from '@nestjs/common';
import { Connection, DeleteResult, Repository } from 'typeorm';
import { CreateShelterInput } from './dto/create-shelter.input';
import { LinkShelterInput } from './dto/link-shelter.input';
import { UpdateShelterInput } from './dto/update-shelter.input';
// import ShelterInput from './dto/shelter.input';
import ShelterType from './dto/shelter.type';
import ShelterEntity from './shelter.entity';
import { ShelterQueryInput } from './dto/query-shelter.input';

@Injectable()
export default class ShelterCrud {
  private readonly repository: Repository<ShelterEntity>;

  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getRepository(ShelterEntity);
  }

  async findAll(query: ShelterQueryInput): Promise<ShelterType[]> {
    return this.repository.find(query);
  }

  async create(shelter: CreateShelterInput): Promise<ShelterType> {
    return this.repository.save(shelter);
  }

  async update(shelter: UpdateShelterInput): Promise<ShelterType> {
    const preloadShelter = await this.repository.preload({
      id: '231798d8-223a-423d-8e28-0e5454527ac9',
      ...shelter,
    });

    return this.repository.save(preloadShelter);
  }

  async remove(shelter: LinkShelterInput): Promise<DeleteResult> {
    return this.repository.softDelete(shelter);
  }
}
