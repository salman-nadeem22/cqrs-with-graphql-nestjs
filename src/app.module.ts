import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CarsModule } from './cars/cars.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CarsModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
