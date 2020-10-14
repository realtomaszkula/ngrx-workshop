import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment clicked');
export const decrement = createAction('decrement clicked');
export const stepChanged = createAction(
  'step changed',
  props<{ step: number }>()
);
