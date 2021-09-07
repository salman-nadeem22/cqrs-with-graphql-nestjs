import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';

@Module({
  providers: [CarsService, CarsResolver],
})
export class CarsModule {}
