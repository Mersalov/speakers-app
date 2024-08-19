import { createReducer, on } from '@ngrx/store';
import {
  loadSpeakers,
  loadSpeakersSuccess,
  loadSpeakersFailure,
  selectSpeaker,
} from './speakers.actions';
import { Speaker } from '../models/Speaker';

export interface SpeakersState {
  speakers: Speaker[];
  selectedSpeaker: Speaker | null;
  error: any;
  loading: boolean;
}

export const initialState: SpeakersState = {
  speakers: [],
  selectedSpeaker: null,
  error: null,
  loading: false,
};

export const speakersReducer = createReducer(
  initialState,
  on(loadSpeakers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadSpeakersSuccess, (state, { speakers }) => ({
    ...state,
    speakers,
    loading: false,
  })),
  on(loadSpeakersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(selectSpeaker, (state, { speaker }) => ({
    ...state,
    selectedSpeaker: speaker,
  }))
);
