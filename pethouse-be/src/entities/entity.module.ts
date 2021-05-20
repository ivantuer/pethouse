import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { ShelterModule } from './shelter/shelter.module';
import { UserModule } from './user/user.module';

@Module({
  //   providers: [],
  imports: [UserModule, ShelterModule, AnimalModule],
})
export class EntityModule {}
