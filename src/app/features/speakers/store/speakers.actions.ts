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
