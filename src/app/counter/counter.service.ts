import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  increment(): Observable<void> {
    return timer(500).pipe(
      switchMap(() => {
        return Math.random() > 0.1 ? of(undefined) : throwError(new Error());
      })
    );
  }

  decrement(): Observable<void> {
    return timer(500).pipe(
      switchMap(() => {
        return Math.random() > 0.1 ? of(undefined) : throwError(new Error());
      })
    );
  }

  constructor() {}
}
