import { Injectable } from '@angular/core';
import { DataService } from '@core/services/data.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class MainEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  loadAirports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainPageActions.LoadAirports),
      switchMap(() =>
        this.dataService.getAirports().pipe(
          map((airports) => MainPageActions.LoadAirportsSuccess({ airports })),
          catchError((error) =>
            of(MainPageActions.LoadAirportsError({ error }))
          )
        )
      )
    )
  );
}
