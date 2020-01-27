import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_REQUEST } from '@ngrx/router-store';
import { HTTPService } from '../../core/services/http.service';
import { map, mergeMap, exhaustMap, switchMap } from 'rxjs/operators';
import { dataLoaded } from '../movie-reducer';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HTTPService) {}

  loadData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_REQUEST),
        switchMap(() =>
          this.http.getData().pipe(map(data => dataLoaded({ payload: data })))
        )
      ),
    { dispatch: true, resubscribeOnError: false }
  );
}
