import { AggregateRoot } from '@nestjs/cqrs';
import { CreateCarEvent } from '../events/impl/create-car.event';

export class Car extends AggregateRoot {
  constructor(private name: string, private carNumber: number) {
    super();
  }

  createCar() {
    this.apply(new CreateCarEvent());
  }
}
