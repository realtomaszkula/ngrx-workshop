import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { decrement, increment } from './counter.actions';
export const counterFeatureKey = 'counter';

export const counterFeature = createFeatureSelector<State>(counterFeatureKey);

export const selectCount = createSelector(
  counterFeature,
  (state) => state.count
);

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

export const reducer = createReducer<State>(
  initialState,
  on(increment, (state, action) => {
    return {
      count: state.count + 1,
    };
  }),
  on(decrement, (state, action) => {
    return {
      count: state.count - 1,
    };
  })
);
