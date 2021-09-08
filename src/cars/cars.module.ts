import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { CarRepository } from './repository/cars.repository';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [
    CarRepository,
    CarsResolver,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class CarsModule {}
