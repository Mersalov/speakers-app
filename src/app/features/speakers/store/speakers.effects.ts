import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SpeakersService } from '../services/speakers.service';
import {
  loadSpeakers,
  loadSpeakersSuccess,
  loadSpeakersFailure,
  goBackToSpeakersList,
  resetSelectedSpeaker,
  goToSpeakerDetails,
} from './speakers.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class SpeakersEffects {
  private actions$ = inject(Actions);
  private speakersService = inject(SpeakersService);
  private store = inject(Store);
  private router = inject(Router);

  loadSpeakers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSpeakers),
      mergeMap(() =>
        this.speakersService.getSpeakers().pipe(
          map((speakers) => loadSpeakersSuccess({ speakers })),
          catchError((error) =>
            of(loadSpeakersFailure({ error: error.message }))
          )
        )
      )
    )
  );

  goBackToSpeakersList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goBackToSpeakersList),
        tap(() => {
          this.store.dispatch(resetSelectedSpeaker());
          this.router.navigate(['/speakers']);
        })
      ),
    { dispatch: false }
  );

  goToSpeakerDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goToSpeakerDetails),
        tap(({ id }) => this.router.navigate([`/speakers/${id}`]))
      ),
    { dispatch: false }
  );
}
