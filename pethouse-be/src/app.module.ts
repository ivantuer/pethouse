import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AnimalEntity from './entities/animal/animal.entity';
import { EntityModule } from './entities/entity.module';
import ShelterEntity from './entities/shelter/shelter.entity';
import UserEntity from './entities/user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      tracing: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: false,
      path: 'api/v1',
      introspection: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'pethouse',
      username: 'postgres',
      password: 'youtrash',
      entities: [UserEntity, ShelterEntity, AnimalEntity],
      synchronize: false,
      migrationsTableName: 'migrations',
    }),

    EntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
