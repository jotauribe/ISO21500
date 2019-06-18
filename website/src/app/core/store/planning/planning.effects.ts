import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as PlanningActions from './planning.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { PlanningService } from '../../services/planning.service';

@Injectable()
export class PlanningEffects {
  @Effect()
  updatePlanning = this.actions.pipe(
    ofType(PlanningActions.Types.UpdatePlanning),

    switchMap((action: PlanningActions.UpdatePlanning) =>
      this.planningService.updatePlanning(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new PlanningActions.UpdatePlanningDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new PlanningActions.UpdatePlanningFail(error)))
      )
    )
  );

  @Effect()
  fetchPlanning = this.actions.pipe(
    ofType(PlanningActions.Types.LoadPlanning),
    switchMap((action: PlanningActions.LoadPlanning) =>
      this.planningService.fetchPlanning(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new PlanningActions.LoadPlanningDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new PlanningActions.LoadPlanningFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private planningService: PlanningService,
    private store: Store<CoreState>
  ) {}
}
