import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  RouterNavigatedPayload,
  SerializedRouterStateSnapshot,
  ROUTER_NAVIGATED
} from '@ngrx/router-store';
import { map } from 'rxjs/operators';
import { addScreen } from './journery.actions';

@Injectable()
export class JourneyEffects {
  onNavigated$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map((action: { payload }) =>
        addScreen({ payload: action.payload.routerState.data.id })
      )
    )
  );

  constructor(private actions$: Actions) {}
}
