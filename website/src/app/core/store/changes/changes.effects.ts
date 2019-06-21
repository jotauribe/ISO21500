import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as ChangesActions from './changes.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { ChangesService } from '../../services/changes.service';

@Injectable()
export class ChangesEffects {
  @Effect()
  updateChanges = this.actions.pipe(
    ofType(ChangesActions.Types.UpdateChanges),
    withLatestFrom(this.store.pipe(select(s => s.planning))),
    switchMap(([action, { data }]: [ChangesActions.UpdateChanges, any]) =>
      this.planningService
        .updateChanges({ ...action.payload, planningId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ChangesActions.UpdateChangesDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error => of(new ChangesActions.UpdateChangesFail(error)))
        )
    )
  );

  @Effect()
  fetchChanges = this.actions.pipe(
    ofType(ChangesActions.Types.LoadChanges),
    switchMap((action: ChangesActions.LoadChanges) =>
      this.planningService.fetchChanges(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ChangesActions.LoadChangesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ChangesActions.LoadChangesFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private planningService: ChangesService,
    private store: Store<CoreState>
  ) {}
}
