import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as ConfigOneActions from './config-one.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { ConfigOneService } from '../../services/config-one.service';

@Injectable()
export class ConfigOneEffects {
  @Effect()
  updateConfigOne = this.actions.pipe(
    ofType(ConfigOneActions.Types.UpdateConfigOne),
    withLatestFrom(this.store.pipe(select(s => s.configOne))),
    switchMap(([action, { data }]: [ConfigOneActions.UpdateConfigOne, any]) =>
      this.configOneService
        .updateConfigOne({ ...action.payload, configOneId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ConfigOneActions.UpdateConfigOneDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error =>
            of(new ConfigOneActions.UpdateConfigOneFail(error))
          )
        )
    )
  );

  @Effect()
  fetchConfigOne = this.actions.pipe(
    ofType(ConfigOneActions.Types.LoadConfigOne),
    switchMap((action: ConfigOneActions.LoadConfigOne) =>
      this.configOneService.fetchConfigOne(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConfigOneActions.LoadConfigOneDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConfigOneActions.LoadConfigOneFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private configOneService: ConfigOneService,
    private store: Store<CoreState>
  ) {}
}
