import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as MembersActions from './members.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { MembersService } from '../../services/members.service';

@Injectable()
export class MembersEffects {
  @Effect()
  updateMembers = this.actions.pipe(
    ofType(MembersActions.Types.UpdateMembers),
    withLatestFrom(this.store.pipe(select(s => s.members))),
    switchMap(([action, { data }]: [MembersActions.UpdateMembers, any]) =>
      this.membersService
        .updateMembers({ ...action.payload, membersId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new MembersActions.UpdateMembersDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error => of(new MembersActions.UpdateMembersFail(error)))
        )
    )
  );

  @Effect()
  fetchMembers = this.actions.pipe(
    ofType(MembersActions.Types.LoadMembers),
    switchMap((action: MembersActions.LoadMembers) =>
      this.membersService.fetchMembers(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new MembersActions.LoadMembersDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new MembersActions.LoadMembersFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private membersService: MembersService,
    private store: Store<CoreState>
  ) {}
}
