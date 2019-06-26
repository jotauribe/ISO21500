import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as RisksActions from './risks.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { RisksService } from '../../services/risks.service';

@Injectable()
export class RisksEffects {
  @Effect()
  updateRisks = this.actions.pipe(
    ofType(RisksActions.Types.UpdateRisks),
    withLatestFrom(this.store.pipe(select(s => s.risks))),
    switchMap(([action, { data }]: [RisksActions.UpdateRisks, any]) =>
      this.risksService
        .updateRisks({ ...action.payload, risksId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new RisksActions.UpdateRisksDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error => of(new RisksActions.UpdateRisksFail(error)))
        )
    )
  );

  @Effect()
  fetchRisks = this.actions.pipe(
    ofType(RisksActions.Types.LoadRisks),
    switchMap((action: RisksActions.LoadRisks) =>
      this.risksService.fetchRisks(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new RisksActions.LoadRisksDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new RisksActions.LoadRisksFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private risksService: RisksService,
    private store: Store<CoreState>
  ) {}
}
