import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersListPresentationComponent } from './speakers-list-presentation.component';

describe('SpeakersListPresentationComponent', () => {
  let component: SpeakersListPresentationComponent;
  let fixture: ComponentFixture<SpeakersListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakersListPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
