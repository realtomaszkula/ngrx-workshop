import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  decrementSuccess,
  incrementSuccess,
  stepChanged,
} from './counter.actions';
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
  on(incrementSuccess, (state, action) => {
    return {
      ...state,
      count: state.count + state.step,
    };
  }),
  on(decrementSuccess, (state, action) => {
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
