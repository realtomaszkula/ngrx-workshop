import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { decrement, increment, stepChanged } from './counter.actions';
export const counterFeatureKey = 'counter';

export const counterFeature = createFeatureSelector<State>(counterFeatureKey);

export const selectCount = createSelector(
  counterFeature,
  (state) => state.count
);

export const selectStep = createSelector(counterFeature, (state) => state.step);

export interface State {
  count: number;
  step: number;
}

export const initialState: State = {
  count: 0,
  step: 10,
};

export const reducer = createReducer<State>(
  initialState,
  on(increment, (state, action) => {
    return {
      ...state,
      count: state.count + state.step,
    };
  }),
  on(decrement, (state, action) => {
    return {
      ...state,
      count: state.count - state.step,
    };
  }),
  on(stepChanged, (state, action) => {
    return {
      ...state,
      step: action.step,
    };
  })
);
