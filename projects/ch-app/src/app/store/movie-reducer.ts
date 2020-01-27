import { createReducer, on, Action, createAction, props } from '@ngrx/store';
import { Item } from '../models/Item';
import { State } from '.';

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

const movieReducer = createReducer(
  initialState,
  on(dataLoaded, (state, { payload }) => {
    return { data: payload };
  })
);

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}
