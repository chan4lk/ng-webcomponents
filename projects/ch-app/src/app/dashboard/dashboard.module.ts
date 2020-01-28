import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MessageCardModule } from '@chan4lk/ch-components';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducer, featureKey } from './+state/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './+state/dashboard.effects';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MessageCardModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
