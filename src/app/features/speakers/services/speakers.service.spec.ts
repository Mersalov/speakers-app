import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Speaker } from '../models/Speaker';
import { SpeakersService } from './speakers.service';

describe('SpeakersService', () => {
  let service: SpeakersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        SpeakersService,
      ],
    });
    service = TestBed.inject(SpeakersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch speakers and transform them', () => {
    const mockApiResponse = {
      results: [
        {
          login: { uuid: '1' },
          name: { first: 'John', last: 'Doe' },
          dob: { age: 30 },
          email: 'john.doe@example.com',
          phone: '123-456-7890',
          picture: { large: 'picture-url' },
          location: {
            street: { number: 123, name: 'Main St' },
            city: 'Anytown',
            state: 'State',
            country: 'USA',
          },
          nat: 'US',
        },
      ],
    };

    const expectedSpeakers: Speaker[] = [
      {
        id: '1',
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        pictureUrl: 'picture-url',
        country: 'USA',
        countryCode: 'us',
        address: '123 Main St, Anytown, State, USA',
      },
    ];

    service.getSpeakers().subscribe((speakers) => {
      expect(speakers).toEqual(expectedSpeakers);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });
});
