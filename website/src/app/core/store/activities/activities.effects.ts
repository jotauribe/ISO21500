import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as ActivitiesActions from './activities.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { ActivitiesService } from '../../services/activities.service';

@Injectable()
export class ActivitiesEffects {
  @Effect()
  updateActivities = this.actions.pipe(
    ofType(ActivitiesActions.Types.UpdateActivities),
    withLatestFrom(this.store.pipe(select(s => s.activities))),
    switchMap(([action, { data }]: [ActivitiesActions.UpdateActivities, any]) =>
      this.activitiesService
        .updateActivities({ ...action.payload, activitiesId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ActivitiesActions.UpdateActivitiesDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error =>
            of(new ActivitiesActions.UpdateActivitiesFail(error))
          )
        )
    )
  );

  @Effect()
  fetchActivities = this.actions.pipe(
    ofType(ActivitiesActions.Types.LoadActivities),
    switchMap((action: ActivitiesActions.LoadActivities) =>
      this.activitiesService.fetchActivities(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ActivitiesActions.LoadActivitiesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ActivitiesActions.LoadActivitiesFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private activitiesService: ActivitiesService,
    private store: Store<CoreState>
  ) {}
}
