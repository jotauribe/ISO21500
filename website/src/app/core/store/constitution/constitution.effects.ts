import { ConstitutionService } from './../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as ConstitutionActions from './constitution.actions';
import { of } from 'rxjs';

@Injectable()
export class ConstitutionEffects {
  @Effect()
  savePrevInfo = this.actions.pipe(
    ofType(ConstitutionActions.Types.SavePrevInfoDone),
    switchMap((action: ConstitutionActions.SavePrevInfo) =>
      this.constitutionService.save(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.SavePrevInfoDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConstitutionActions.SavePrevInfoFail(error)))
      )
    )
  );

  @Effect()
  fetchPrevInfo = this.actions.pipe(
    ofType(ConstitutionActions.Types.LoadPrevInfo),
    switchMap((action: ConstitutionActions.LoadPrevInfo) =>
      this.constitutionService.fetchPrevInfo(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.LoadPrevInfoDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConstitutionActions.LoadPrevInfoFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private constitutionService: ConstitutionService
  ) {}
}
