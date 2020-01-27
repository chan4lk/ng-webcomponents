import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MessageCardModule } from '@chan4lk/ch-components';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../store/movie-reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../store/effects/app.effects';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MessageCardModule,
    StoreModule.forFeature('dashboard', reducer),
    EffectsModule.forFeature([AppEffects])
  ]
})
export class DashboardModule { }
