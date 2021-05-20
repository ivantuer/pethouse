import { Module } from '@nestjs/common';
import { RequestUserService } from './requestUser.service';

@Module({
  exports: [RequestUserService],
  providers: [RequestUserService],
})
export class RequestUserModule {}
