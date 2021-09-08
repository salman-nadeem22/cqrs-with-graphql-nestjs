import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CreateNewCarCommand } from '../commands/impl/create-new-car.command';
import { CreateCarEvent } from '../events/impl/create-car.event';

@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CreateNewCarCommand),
      delay(1000),
      map(() => {
        return new CreateCarEvent();
      }),
    );
  };
}
