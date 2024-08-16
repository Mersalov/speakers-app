import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../core/state/app.reducer';
import { Speaker } from '../../models/Speaker';
import { loadSpeakers } from '../../store/speakers.actions';
import {
  selectAllSpeakers,
  selectSpeakersError,
  selectSpeakersLoading,
} from '../../store/speakers.selectors';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrl: './speakers-list.component.scss',
})
export class SpeakersListComponent {
  speakers$!: Observable<Speaker[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadSpeakers());
    this.speakers$ = this.store.select(selectAllSpeakers);
    this.loading$ = this.store.select(selectSpeakersLoading);
    this.error$ = this.store.select(selectSpeakersError);
  }

  onSelectSpeaker(speaker: Speaker): void {}
}
