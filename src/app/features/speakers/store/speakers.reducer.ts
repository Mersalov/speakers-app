import { createReducer, on } from '@ngrx/store';
import {
  loadSpeakers,
  loadSpeakersSuccess,
  loadSpeakersFailure,
} from './speakers.actions';
import { Speaker } from '../models/Speaker';

export interface SpeakersState {
  speakers: Speaker[];
  error: any;
  loading: boolean;
}

export const initialState: SpeakersState = {
  speakers: [],
  error: null,
  loading: false,
};

export const speakersReducer = createReducer(
  initialState,
  on(loadSpeakers, (state) => ({ ...state, loading: true })),
  on(loadSpeakersSuccess, (state, { speakers }) => ({
    ...state,
    speakers,
    loading: false,
  })),
  on(loadSpeakersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
