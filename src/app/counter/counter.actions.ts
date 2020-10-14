import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] increment clicked');
export const incrementSuccess = createAction('[API] increment success');

export const decrement = createAction('[Counter] decrement clicked');
export const decrementSuccess = createAction('[API] decrement success');

export const stepChanged = createAction(
  '[Counter] step changed',
  props<{ step: number }>()
);
