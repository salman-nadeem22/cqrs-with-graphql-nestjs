import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateCarEvent } from '../impl/create-car.event';

@EventsHandler(CreateCarEvent)
export class CreateCarHandler implements IEventHandler<CreateCarEvent> {
  handle() {
    console.log('Car Created Successfully');
  }
}
