import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersListPresentationComponent } from './components/speakers-list-presentation/speakers-list-presentation.component';
import { SpeakersListComponent } from './components/speakers-list/speakers-list.component';
import { SpeakerDetailsPresentationComponent } from './components/speaker-details-presentation/speaker-details-presentation.component';
import { SpeakerDetailsComponent } from './components/speaker-details/speaker-details.component';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SpeakersEffects } from './store/speakers.effects';
import { speakersReducer } from './store/speakers.reducer';

@NgModule({
  declarations: [
    SpeakersListPresentationComponent,
    SpeakersListComponent,
    SpeakerDetailsPresentationComponent,
    SpeakerDetailsComponent,
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    SharedModule,
    StoreModule.forFeature('speakers', speakersReducer),
    // EffectsModule.forFeature([SpeakersEffects]),
  ],
})
export class SpeakersModule {}
