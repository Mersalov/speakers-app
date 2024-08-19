import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import {
  SpeakerDetailsContainerComponent,
  SpeakersListContainerComponent,
} from './components/containers';
import {
  SpeakerDetailsComponent,
  SpeakersListComponent,
  SpeakersListSearchComponent,
} from './components/presentational';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersEffects } from './store/speakers.effects';
import { speakersReducer } from './store/speakers.reducer';

@NgModule({
  declarations: [
    SpeakersListContainerComponent,
    SpeakerDetailsContainerComponent,
    SpeakersListComponent,
    SpeakersListSearchComponent,
    SpeakerDetailsComponent,
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    SharedModule,
    StoreModule.forFeature('speakers', speakersReducer),
    EffectsModule.forFeature([SpeakersEffects]),
  ],
})
export class SpeakersModule {}
