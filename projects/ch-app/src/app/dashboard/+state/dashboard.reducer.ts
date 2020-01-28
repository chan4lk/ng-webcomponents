import { createReducer, on, Action, createAction, props, createFeatureSelector } from '@ngrx/store';
import { Item } from '../../models/Item';

export const featureKey = 'dashboard';

export const dataLoaded = createAction(
  '@data/loaded',
  props<{ payload: Item[] }>()
);

export interface MovieState {
  data: Item[];
}

export const initialState: MovieState = {
  data: []
};

export const selectMovies = createFeatureSelector<MovieState>(featureKey);

const movieReducer = createReducer(
  initialState,
  on(dataLoaded, (state, { payload }) => {
      debugger;
    return { data: payload };
  })
);

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}
