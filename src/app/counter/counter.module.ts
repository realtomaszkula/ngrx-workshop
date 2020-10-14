import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import * as fromCounter from './counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter.effects';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class CounterModule {}
