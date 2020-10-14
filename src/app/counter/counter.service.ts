import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  increment(): Observable<void> {
    return timer(500).pipe(mapTo(undefined));
  }

  decrement(): Observable<void> {
    return timer(500).pipe(mapTo(undefined));
  }

  constructor() {}
}
