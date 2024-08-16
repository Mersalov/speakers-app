import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Speaker } from '../../models/Speaker';

@Component({
  selector: 'app-speakers-list-presentation',
  templateUrl: './speakers-list-presentation.component.html',
  styleUrl: './speakers-list-presentation.component.scss',
})
export class SpeakersListPresentationComponent {
  @Input() speakers: Speaker[] = [];
  @Output() selectSpeaker = new EventEmitter<Speaker>();

  onSelectSpeaker(speaker: Speaker): void {
    this.selectSpeaker.emit(speaker);
  }
}
