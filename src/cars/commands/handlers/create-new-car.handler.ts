import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CarRepository } from '../../repository/cars.repository';
import { CreateNewCarCommand } from '../impl';

@CommandHandler(CreateNewCarCommand)
export class CreateNewCarHandler
  implements ICommandHandler<CreateNewCarCommand>
{
  constructor(
    private readonly repository: CarRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateNewCarCommand) {
    const { carNumber, name } = command;
    const car = this.publisher.mergeObjectContext(
      this.repository.createCar(name, carNumber),
    );
    car.createCar();
    car.commit();
  }
}
