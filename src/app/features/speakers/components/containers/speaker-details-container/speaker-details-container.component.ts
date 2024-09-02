import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../../core/state/app.reducer';
import { Speaker } from '../../../models/Speaker';
import { goBackToSpeakersList } from '../../../store/speakers.actions';
import { selectSelectedSpeaker } from '../../../store/speakers.selectors';

@Component({
  selector: 'app-speaker-details-container',
  templateUrl: './speaker-details-container.component.html',
  styleUrl: './speaker-details-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerDetailsContainerComponent implements OnInit {
  speaker$!: Observable<Speaker | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.speaker$ = this.store.select(selectSelectedSpeaker);
  }

  onBack(): void {
    this.store.dispatch(goBackToSpeakersList());
  }
}
