import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDetailsPresentationComponent } from './speaker-details-presentation.component';

describe('SpeakerDetailsPresentationComponent', () => {
  let component: SpeakerDetailsPresentationComponent;
  let fixture: ComponentFixture<SpeakerDetailsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakerDetailsPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerDetailsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
