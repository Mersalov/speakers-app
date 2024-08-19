import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { SpeakerDetailsContainerComponent } from './speaker-details-container.component';
import { goBackToSpeakersList } from '../../../store/speakers.actions';
import { Speaker } from '../../../models/Speaker';

describe('SpeakerDetailsContainerComponent', () => {
  let component: SpeakerDetailsContainerComponent;
  let fixture: ComponentFixture<SpeakerDetailsContainerComponent>;
  let store: jasmine.SpyObj<Store>;

  const mockSpeaker: Speaker = {
    id: '1',
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    pictureUrl: 'picture-url',
    country: 'USA',
    countryCode: 'us',
    address: '123 Main St, Anytown, State, USA',
  };

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      declarations: [SpeakerDetailsContainerComponent],
      providers: [{ provide: Store, useValue: storeSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerDetailsContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the speaker from the store on init', () => {
    store.select.and.returnValue(of(mockSpeaker));

    component.ngOnInit();

    component.speaker$.subscribe((speaker) => {
      expect(speaker).toEqual(mockSpeaker);
    });

    expect(store.select).toHaveBeenCalled();
  });

  it('should dispatch goBackToSpeakersList action on back', () => {
    component.onBack();

    expect(store.dispatch).toHaveBeenCalledWith(goBackToSpeakersList());
  });
});
