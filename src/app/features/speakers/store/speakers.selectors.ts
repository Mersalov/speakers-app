import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpeakersState } from './speakers.reducer';
import { Speaker } from '../models/Speaker';

export const selectSpeakersState =
  createFeatureSelector<SpeakersState>('speakers');

export const selectAllSpeakers = createSelector(
  selectSpeakersState,
  (state: SpeakersState) => state.speakers || []
);

export const selectSpeakersLoading = createSelector(
  selectSpeakersState,
  (state: SpeakersState) => state.loading
);

export const selectSpeakersError = createSelector(
  selectSpeakersState,
  (state: SpeakersState) => state.error
);

export const selectSpeakerById = (id: string) =>
  createSelector(selectAllSpeakers, (speakers: Speaker[]) =>
    speakers.find((speaker) => speaker.id === id)
  );
