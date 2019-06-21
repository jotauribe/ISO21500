import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as TeamsActions from './teams.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { TeamsService } from '../../services/teams.service';

@Injectable()
export class TeamsEffects {
  @Effect()
  updateTeams = this.actions.pipe(
    ofType(TeamsActions.Types.UpdateTeams),
    withLatestFrom(this.store.pipe(select(s => s.teams))),
    switchMap(([action, { data }]: [TeamsActions.UpdateTeams, any]) =>
      this.teamsService
        .updateTeams({ ...action.payload, teamsId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new TeamsActions.UpdateTeamsDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error => of(new TeamsActions.UpdateTeamsFail(error)))
        )
    )
  );

  @Effect()
  fetchTeams = this.actions.pipe(
    ofType(TeamsActions.Types.LoadTeams),
    switchMap((action: TeamsActions.LoadTeams) =>
      this.teamsService.fetchTeams(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new TeamsActions.LoadTeamsDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new TeamsActions.LoadTeamsFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private teamsService: TeamsService,
    private store: Store<CoreState>
  ) {}
}
