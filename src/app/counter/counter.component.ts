import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, stepChanged } from './counter.actions';
import { selectCount, selectStep } from './counter.reducer';

@Component({
  selector: 'app-counter',
  template: `
    <section>
      <button mat-raised-button (click)="decrement()">-</button>
      <span>{{ count$ | async }}</span>
      <button mat-raised-button (click)="increment()">+</button>
    </section>

    <mat-form-field appearance="fill">
      <mat-label>Step</mat-label>
      <input
        matInput
        [ngModel]="step$ | async"
        (ngModelChange)="stepChanged($event)"
        type="number"
      />
    </mat-form-field>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
      }

      section {
        margin-bottom: 1rem;
      }

      mat-form-field {
        display: block;
        max-width: 300px;
      }
    `,
  ],
})
export class CounterComponent implements OnInit {
  count$: Observable<number> = this.store.pipe(select(selectCount));
  step$: Observable<number> = this.store.pipe(select(selectStep));

  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  stepChanged(step: number): void {
    this.store.dispatch(stepChanged({ step }));
  }
}
