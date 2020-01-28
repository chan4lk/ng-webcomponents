import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_REQUEST } from '@ngrx/router-store';
import { HTTPService } from '../../core/services/http.service';
import { map, switchMap } from 'rxjs/operators';
import { dataLoaded, pageLoaded } from './dashboard.reducer';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private http: HTTPService) {}

  loadData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(pageLoaded),
        switchMap(() =>
          this.http.getData().pipe(map(data => dataLoaded({ payload: data })))
        )
      ),
    { dispatch: true, resubscribeOnError: false }
  );
}
