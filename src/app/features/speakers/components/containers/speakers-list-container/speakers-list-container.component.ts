import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../../core/state/app.reducer';
import { Speaker } from '../../../models/Speaker';
import {
  goToSpeakerDetails,
  loadSpeakers,
  selectSpeaker,
} from '../../../store/speakers.actions';

import {
  selectAllSpeakers,
  selectSelectedSpeaker,
  selectSpeakersError,
  selectSpeakersLoading,
} from '../../../store/speakers.selectors';

@Component({
  selector: 'app-speakers-list-container',
  templateUrl: './speakers-list-container.component.html',
  styleUrl: './speakers-list-container.component.scss',
})
export class SpeakersListContainerComponent {
  speakers$!: Observable<Speaker[]>;
  selectedSpeaker$!: Observable<Speaker | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;
  searchText: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadSpeakers());
    this.speakers$ = this.store.select(selectAllSpeakers);
    this.loading$ = this.store.select(selectSpeakersLoading);
    this.error$ = this.store.select(selectSpeakersError);
    this.selectedSpeaker$ = this.store.select(selectSelectedSpeaker);
  }

  applySearch(text: string): void {
    this.searchText = text;
  }

  onSelectSpeaker(speaker: Speaker): void {
    this.store.dispatch(selectSpeaker({ speaker }));
    this.store.dispatch(goToSpeakerDetails({ id: speaker.id }));
  }
}
