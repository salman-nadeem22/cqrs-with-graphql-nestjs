import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarSchema } from './car.schema';
import { CarsService } from './cars.service';

@Resolver(() => CarSchema)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [CarSchema])
  getCars(): CarSchema[] {
    return this.carsService.getAllCars();
  }

  @Mutation(() => CarSchema)
  createNewCar(
    @Args('name') name: string,
    @Args('carNumber') carNumber: number,
  ): CarSchema {
    return this.carsService.createNewCar({ name, carNumber });
  }
}
