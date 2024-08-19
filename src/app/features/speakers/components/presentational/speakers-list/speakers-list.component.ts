import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Table } from 'primeng/table';
import { Speaker } from '../../../models/Speaker';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrl: './speakers-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersListComponent implements OnChanges {
  @ViewChild('speakersListTable') speakersListTable!: Table;
  @Input() searchText: string = '';
  @Input() speakers!: Speaker[];
  @Input() loading!: boolean;
  @Output() selectSpeaker = new EventEmitter<Speaker>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText'] && this.speakersListTable?.filterGlobal) {
      this.speakersListTable.filterGlobal(this.searchText, 'contains');
    }
  }
}
