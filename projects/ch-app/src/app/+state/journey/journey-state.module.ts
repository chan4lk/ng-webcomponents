import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { journeyReducer } from './journey.reducer';
import { JourneyEffects } from './journey.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('journey', journeyReducer),
    EffectsModule.forFeature([JourneyEffects])
  ],
  exports: [],
  providers: [JourneyEffects]
})
export class JourneyStateModule {}
