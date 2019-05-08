import { ConstitutionService } from './../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as ConstitutionActions from './constitution.actions';
import { of } from 'rxjs';

@Injectable()
export class ConstitutionEffects {
  @Effect()
  saveInfo = this.actions.pipe(
    ofType(ConstitutionActions.Types.SaveInfoDone),
    switchMap((action: ConstitutionActions.SaveInfo) =>
      this.constitutionService.save(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.SaveInfoDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConstitutionActions.SaveInfoFail(error)))
      )
    )
  );

  @Effect()
  fetchInfo = this.actions.pipe(
    ofType(ConstitutionActions.Types.LoadInfo),
    switchMap((action: ConstitutionActions.LoadInfo) =>
      this.constitutionService.fetch(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.LoadInfoDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConstitutionActions.LoadInfoFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private constitutionService: ConstitutionService
  ) {}
}
