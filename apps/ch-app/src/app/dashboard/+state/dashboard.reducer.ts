import { createReducer, on, Action, createAction, props, createFeatureSelector } from '@ngrx/store';
import { Item } from '../../models/Item';

export const featureKey = 'dashboard';

export const dataLoaded = createAction(
  '[dashboard] data loaded',
  props<{ payload: Item[] }>()
);

export const pageLoaded = createAction(
  '[dashboard] page laoded'
)

export interface MovieState {
  data: Item[];
}

export const initialState: MovieState = {
  data: []
};

export const selectMovies = createFeatureSelector<MovieState>(featureKey);

const movieReducer = createReducer(
  initialState,
  on(dataLoaded, (state, { payload }) => ({ data: payload }))
);

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}
