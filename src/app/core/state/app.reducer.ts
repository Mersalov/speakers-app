import { ActionReducerMap } from '@ngrx/store';
import { SpeakersState, speakersReducer } from '../../features/speakers/store/speakers.reducer';

export interface AppState {
  speakers: SpeakersState;
}

export const reducers: ActionReducerMap<AppState> = {
  speakers: speakersReducer,
};