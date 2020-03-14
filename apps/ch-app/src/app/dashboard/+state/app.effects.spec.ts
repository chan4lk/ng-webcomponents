import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DashboardEffects } from './dashboard.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: DashboardEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<DashboardEffects>(DashboardEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
