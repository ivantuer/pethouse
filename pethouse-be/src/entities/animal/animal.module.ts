import { HttpModule, Module } from '@nestjs/common';
import { RequestUserModule } from 'src/services/requestUser/requestUser.module';
import AnimalCrud from './animal.crud';
import AnimalResolver from './animal.resolver';

@Module({
  imports: [HttpModule, RequestUserModule],
  providers: [AnimalResolver, AnimalCrud],
})
export class AnimalModule {}
