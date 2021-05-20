import { HttpModule, Module } from '@nestjs/common';
import { RequestUserModule } from 'src/services/requestUser/requestUser.module';
import { RequestUserService } from 'src/services/requestUser/requestUser.service';
import UserCrud from './user.crud';
import UserResolver from './user.resolver';

@Module({
  imports: [HttpModule, RequestUserModule],
  providers: [UserResolver, UserCrud],
})
export class UserModule {}
