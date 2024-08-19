import { createAction, props } from '@ngrx/store';
import { Speaker } from '../models/Speaker';

export const loadSpeakers = createAction('[Speakers] Load Speakers');
export const loadSpeakersSuccess = createAction(
  '[Speakers] Load Speakers Success',
  props<{ speakers: Speaker[] }>()
);
export const loadSpeakersFailure = createAction(
  '[Speakers] Load Speakers Failure',
  props<{ error: any }>()
);
export const selectSpeaker = createAction(
  '[Speakers] Select Speaker',
  props<{ speaker: Speaker }>()
);
export const resetSelectedSpeaker = createAction(
  '[Speakers] Reset Selected Speaker'
);
export const goBackToSpeakersList = createAction(
  '[Speakers] Go Back to Speakers List'
);
export const goToSpeakerDetails = createAction(
  '[Speakers] Go to Speaker Details',
  props<{ id: string }>()
);
