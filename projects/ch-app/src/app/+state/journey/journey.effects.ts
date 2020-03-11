import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { map } from 'rxjs/operators';
import { addScreen } from './journery.actions';

@Injectable()
export class JourneyEffects {
  onNavigated$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map((action: { payload }) => {
        if (
          action.payload.routerState.data &&
          action.payload.routerState.data.id
        ) {
          return addScreen({ payload: action.payload.routerState.data.id });
        } else {
          return { type: 'ignore' };
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
