import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, NavigationActionTiming } from '@ngrx/router-store';
import { CustomSerializer, reducers } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
      RouterModule,
      StoreModule.forFeature('router', reducers),
      StoreRouterConnectingModule.forRoot({
        serializer: CustomSerializer,
        navigationActionTiming: NavigationActionTiming.PostActivation
      }),
      EffectsModule.forFeature([])
],
  exports: []
})
export class AppRoutingModule { }
