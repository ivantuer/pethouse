import { HttpModule, Module } from '@nestjs/common';
import { RequestUserModule } from 'src/services/requestUser/requestUser.module';
import ShelterCrud from './shelter.crud';
import ShelterResolver from './shelter.resolver';

@Module({
  imports: [HttpModule, RequestUserModule],
  providers: [ShelterResolver, ShelterCrud],
})
export class ShelterModule {}
