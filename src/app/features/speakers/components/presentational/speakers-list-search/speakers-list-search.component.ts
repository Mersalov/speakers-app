import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-speakers-list-search',
  templateUrl: './speakers-list-search.component.html',
  styleUrl: './speakers-list-search.component.scss',
})
export class SpeakersListSearchComponent {
  @Output() searchText = new EventEmitter<string>();
  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(debounceTime(300)).subscribe((searchText) => {
      this.searchText.emit(searchText);
    });
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchSubject.next(inputElement.value);
  }
}
