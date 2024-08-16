import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SpeakersService } from '../services/speakers.service';
import {
  loadSpeakers,
  loadSpeakersSuccess,
  loadSpeakersFailure,
} from './speakers.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SpeakersEffects {
  constructor(
    private actions$: Actions,
    private SpeakersService: SpeakersService
  ) {}

  loadSpeakers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSpeakers),
      mergeMap(() =>
        this.SpeakersService.getSpeakers().pipe(
          map((speakers) => loadSpeakersSuccess({ speakers })),
          catchError((error) =>
            of(loadSpeakersFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
