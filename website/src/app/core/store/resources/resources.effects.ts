import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as ResourcesActions from './resources.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { ResourcesService } from '../../services/resources.service';

@Injectable()
export class ResourcesEffects {
  @Effect()
  updateResources = this.actions.pipe(
    ofType(ResourcesActions.Types.UpdateResources),
    withLatestFrom(this.store.pipe(select(s => s.resources))),
    switchMap(([action, { data }]: [ResourcesActions.UpdateResources, any]) =>
      this.resourcesService
        .updateResources({ ...action.payload, resourcesId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ResourcesActions.UpdateResourcesDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error =>
            of(new ResourcesActions.UpdateResourcesFail(error))
          )
        )
    )
  );

  @Effect()
  fetchResources = this.actions.pipe(
    ofType(ResourcesActions.Types.LoadResources),
    switchMap((action: ResourcesActions.LoadResources) =>
      this.resourcesService.fetchResources(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ResourcesActions.LoadResourcesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ResourcesActions.LoadResourcesFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private resourcesService: ResourcesService,
    private store: Store<CoreState>
  ) {}
}
