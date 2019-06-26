import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as AcquisitionsActions from './acquisitions.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { AcquisitionsService } from '../../services/acquisitions.service';

@Injectable()
export class AcquisitionsEffects {
  @Effect()
  updateAcquisitions = this.actions.pipe(
    ofType(AcquisitionsActions.Types.UpdateAcquisitions),
    withLatestFrom(this.store.pipe(select(s => s.acquisitions))),
    switchMap(
      ([action, { data }]: [AcquisitionsActions.UpdateAcquisitions, any]) =>
        this.acquisitionsService
          .updateAcquisitions({ ...action.payload, acquisitionsId: data._id })
          .pipe(
            // If successful, dispatch success action with result
            map(data => {
              return new AcquisitionsActions.UpdateAcquisitionsDone(data);
            }),
            // If request fails, dispatch failed action
            catchError(error =>
              of(new AcquisitionsActions.UpdateAcquisitionsFail(error))
            )
          )
    )
  );

  @Effect()
  fetchAcquisitions = this.actions.pipe(
    ofType(AcquisitionsActions.Types.LoadAcquisitions),
    switchMap((action: AcquisitionsActions.LoadAcquisitions) =>
      this.acquisitionsService.fetchAcquisitions(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new AcquisitionsActions.LoadAcquisitionsDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new AcquisitionsActions.LoadAcquisitionsFail(error))
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private acquisitionsService: AcquisitionsService,
    private store: Store<CoreState>
  ) {}
}
