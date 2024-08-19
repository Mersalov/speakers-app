import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Speaker } from '../../../models/Speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrl: './speaker-details.component.scss',
})
export class SpeakerDetailsComponent {
  @Input() speaker!: Speaker;
  @Output() back = new EventEmitter<void>();

  onBack(): void {
    this.back.emit();
  }
}
