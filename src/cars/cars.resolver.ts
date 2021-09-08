import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarSchema } from './car.schema';
import { CreateNewCarCommand } from './commands/impl';
import { GetAllCarsQuery } from './queries/impl';

@Resolver(() => CarSchema)
export class CarsResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [CarSchema])
  async getCars(): Promise<CarSchema[]> {
    return this.queryBus.execute(new GetAllCarsQuery());
  }

  @Mutation(() => [CarSchema], { nullable: true })
  async createNewCar(
    @Args('name') name: string,
    @Args('carNumber') carNumber: number,
  ) {
    this.commandBus.execute(new CreateNewCarCommand(name, carNumber));
    return this.queryBus.execute(new GetAllCarsQuery());
  }
}
