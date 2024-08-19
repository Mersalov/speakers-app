import { Injectable } from '@angular/core';
import { Speaker } from '../models/Speaker';
import { map, Observable, of, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
  private apiUrl = `${environment.apiUrl}/?results=20&page=1`;

  constructor(private http: HttpClient) {}

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) =>
        response.results.map((user: any) => this.transformUserToSpeaker(user))
      ),
      catchError(this.handleError<Speaker[]>('getSpeakers', []))
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
      country: user.location.country,
      countryCode: this.mapNatToCountryCode(user.nat),
      address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    };
  }

  private mapNatToCountryCode(nat: string): string {
    return nat.toLowerCase();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
