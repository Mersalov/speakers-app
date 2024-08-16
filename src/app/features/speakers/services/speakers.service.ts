import { Injectable } from '@angular/core';
import { Speaker } from '../models/Speaker';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
  private apiUrl = 'https://randomuser.me/api/?results=20&page=1';

  constructor(private http: HttpClient) {}

  getSpeakers(): Observable<Speaker[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(
        map((response) =>
          response.results.map((user: any) => this.transformUserToSpeaker(user))
        )
      );
  }

  private transformUserToSpeaker(user: any): Speaker {
    return {
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      age: user.dob.age,
      email: user.email,
      phone: user.phone,
      pictureUrl: user.picture.large,
      address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    };
  }
}
