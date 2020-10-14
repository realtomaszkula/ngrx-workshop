import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import * as fromCounter from './counter.reducer';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer),
  ],
})
export class CounterModule {}
