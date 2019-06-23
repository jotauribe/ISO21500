import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as ProvidersActions from './providers.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { ProvidersService } from '../../services/providers.service';

@Injectable()
export class ProvidersEffects {
  @Effect()
  updateProviders = this.actions.pipe(
    ofType(ProvidersActions.Types.UpdateProviders),
    withLatestFrom(this.store.pipe(select(s => s.providers))),
    switchMap(([action, { data }]: [ProvidersActions.UpdateProviders, any]) =>
      this.providersService
        .updateProviders({ ...action.payload, providersId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ProvidersActions.UpdateProvidersDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error =>
            of(new ProvidersActions.UpdateProvidersFail(error))
          )
        )
    )
  );

  @Effect()
  fetchProviders = this.actions.pipe(
    ofType(ProvidersActions.Types.LoadProviders),
    switchMap((action: ProvidersActions.LoadProviders) =>
      this.providersService.fetchProviders(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ProvidersActions.LoadProvidersDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ProvidersActions.LoadProvidersFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private providersService: ProvidersService,
    private store: Store<CoreState>
  ) {}
}
