import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as TeamManagementActions from './team-management.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { TeamManagementService } from '../../services/team-management.service';

@Injectable()
export class TeamManagementEffects {
  @Effect()
  updateTeamManagement = this.actions.pipe(
    ofType(TeamManagementActions.Types.UpdateTeamManagement),
    withLatestFrom(this.store.pipe(select(s => s.teamManagement))),
    switchMap(
      ([action, { data }]: [TeamManagementActions.UpdateTeamManagement, any]) =>
        this.teamManagementService
          .updateTeamManagement({
            ...action.payload,
            teamManagementId: data._id
          })
          .pipe(
            // If successful, dispatch success action with result
            map(data => {
              return new TeamManagementActions.UpdateTeamManagementDone(data);
            }),
            // If request fails, dispatch failed action
            catchError(error =>
              of(new TeamManagementActions.UpdateTeamManagementFail(error))
            )
          )
    )
  );

  @Effect()
  fetchTeamManagement = this.actions.pipe(
    ofType(TeamManagementActions.Types.LoadTeamManagement),
    switchMap((action: TeamManagementActions.LoadTeamManagement) =>
      this.teamManagementService.fetchTeamManagement(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new TeamManagementActions.LoadTeamManagementDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new TeamManagementActions.LoadTeamManagementFail(error))
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private teamManagementService: TeamManagementService,
    private store: Store<CoreState>
  ) {}
}
