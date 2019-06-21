import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as ConfigTwoActions from './config-two.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { ConfigTwoService } from '../../services/config-two.service';

@Injectable()
export class ConfigTwoEffects {
  @Effect()
  updateConfigTwo = this.actions.pipe(
    ofType(ConfigTwoActions.Types.UpdateConfigTwo),
    withLatestFrom(this.store.pipe(select(s => s.configTwo))),
    switchMap(([action, { data }]: [ConfigTwoActions.UpdateConfigTwo, any]) =>
      this.configTwoService
        .updateConfigTwo({ ...action.payload, configTwoId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ConfigTwoActions.UpdateConfigTwoDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error =>
            of(new ConfigTwoActions.UpdateConfigTwoFail(error))
          )
        )
    )
  );

  @Effect()
  fetchConfigTwo = this.actions.pipe(
    ofType(ConfigTwoActions.Types.LoadConfigTwo),
    switchMap((action: ConfigTwoActions.LoadConfigTwo) =>
      this.configTwoService.fetchConfigTwo(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConfigTwoActions.LoadConfigTwoDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConfigTwoActions.LoadConfigTwoFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private configTwoService: ConfigTwoService,
    private store: Store<CoreState>
  ) {}
}
