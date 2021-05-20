import { HttpModule, Module } from '@nestjs/common';
import { RequestUserModule } from 'src/services/requestUser/requestUser.module';
import AnimalRequestCrud from './animal-request.crud';
import AnimalRequestResolver from './animal-request.resolver';

@Module({
  imports: [HttpModule, RequestUserModule],
  providers: [AnimalRequestResolver, AnimalRequestCrud],
})
export class AnimalRequestModule {}
