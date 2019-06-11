import { ConstitutionService } from './../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as ConstitutionActions from './constitution.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';

@Injectable()
export class ConstitutionEffects {
  @Effect()
  savePrevInfo = this.actions.pipe(
    ofType(ConstitutionActions.Types.SavePrevInfo),
    withLatestFrom(
      this.store.pipe(select(s => s.constitution.previousInformation))
    ),
    switchMap(([action, { data }]: [ConstitutionActions.SavePrevInfo, any]) =>
      this.constitutionService
        .updatePrevInfo(action.payload.projectId, data._id, action.payload.data)
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ConstitutionActions.SavePrevInfoDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error =>
            of(new ConstitutionActions.SavePrevInfoFail(error))
          )
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
    private constitutionService: ConstitutionService,
    private store: Store<CoreState>
  ) {}
}
