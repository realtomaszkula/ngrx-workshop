import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from './counter.actions';
import { selectCount } from './counter.reducer';

@Component({
  selector: 'app-counter',
  template: ` <button mat-raised-button (click)="decrement()">-</button>
    <span>{{ count$ | async }}</span>
    <button mat-raised-button (click)="increment()">+</button>`,
})
export class CounterComponent implements OnInit {
  count$: Observable<number> = this.store.pipe(select(selectCount));

  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }
}
