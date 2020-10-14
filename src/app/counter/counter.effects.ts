import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import {
  decrement,
  decrementError,
  decrementSuccess,
  increment,
  incrementError,
  incrementSuccess,
} from './counter.actions';
import { CounterService } from './counter.service';

@Injectable()
export class CounterEffects {
  increment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment),
      concatMap((action) => {
        return this.counterService.increment().pipe(
          map(() => incrementSuccess()),
          catchError((error) =>
            of(incrementError({ error: 'increment failed' }))
          )
        );
      })
    );
  });

  decrement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(decrement),
      concatMap((action) => {
        return this.counterService.increment().pipe(
          map(() => decrementSuccess()),
          catchError((error) =>
            of(decrementError({ error: 'decrement failed' }))
          )
        );
      })
    );
  });

  showErrorToast = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(incrementError, decrementError),
        tap(({ error }) => {
          return this.snackbarService.open(error, 'OK');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private counterService: CounterService,
    private snackbarService: MatSnackBar
  ) {}
}
