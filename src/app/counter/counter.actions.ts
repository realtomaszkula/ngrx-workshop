import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] increment clicked');
export const incrementSuccess = createAction('[API] increment success');
export const incrementError = createAction(
  '[API] increment error',
  props<{ error: string }>()
);

export const decrement = createAction('[Counter] decrement clicked');
export const decrementSuccess = createAction('[API] decrement success');
export const decrementError = createAction(
  '[API] decrement error',
  props<{ error: string }>()
);

export const stepChanged = createAction(
  '[Counter] step changed',
  props<{ step: number }>()
);
