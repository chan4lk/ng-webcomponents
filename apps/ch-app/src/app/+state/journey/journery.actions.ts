import { createAction, props } from '@ngrx/store';

export enum JourneyActionTypes {
  ADD_SCREEN = '[Journey] Add screen to journey'
}

export const addScreen = createAction(
  JourneyActionTypes.ADD_SCREEN,
  props<{ payload: string }>()
);
