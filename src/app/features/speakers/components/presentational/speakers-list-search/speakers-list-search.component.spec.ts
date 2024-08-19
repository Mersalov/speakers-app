import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeakersListSearchComponent } from './speakers-list-search.component';
import { InputTextModule } from 'primeng/inputtext';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SpeakersListSearchComponent', () => {
  let component: SpeakersListSearchComponent;
  let fixture: ComponentFixture<SpeakersListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakersListSearchComponent],
      imports: [InputTextModule], // Import PrimeNG modules as needed
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakersListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
