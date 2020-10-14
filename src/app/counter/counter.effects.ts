import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import {
  decrement,
  decrementSuccess,
  increment,
  incrementSuccess,
} from './counter.actions';
import { CounterService } from './counter.service';

@Injectable()
export class CounterEffects {
  increment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment),
      concatMap((action) => {
        return this.counterService
          .increment()
          .pipe(map(() => incrementSuccess()));
      })
    );
  });

  decrement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(decrement),
      concatMap((action) => {
        return this.counterService
          .increment()
          .pipe(map(() => decrementSuccess()));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}
}
