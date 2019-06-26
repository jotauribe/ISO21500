import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'CHANGES FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadTeams: 'Load Teams',
    LoadTeamsDone: 'Load Teams Done',
    LoadTeamsFail: 'Load Teams Failure',
    UpdateTeams: 'Update Teams',
    UpdateTeamsDone: 'Update Teams Done',
    UpdateTeamsFail: 'Update Teams Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadTeams implements Action {
  readonly type = Types.LoadTeams;
  constructor(public payload?: any) {}
}

export class LoadTeamsDone implements Action {
  readonly type = Types.LoadTeamsDone;
  constructor(public payload?: any) {}
}

export class LoadTeamsFail implements Action {
  readonly type = Types.LoadTeamsFail;
  constructor(public payload?: any) {}
}

export class UpdateTeams implements Action {
  readonly type = Types.UpdateTeams;
  constructor(public payload?: any) {}
}

export class UpdateTeamsDone implements Action {
  readonly type = Types.UpdateTeamsDone;
  constructor(public payload?: any) {}
}

export class UpdateTeamsFail implements Action {
  readonly type = Types.UpdateTeamsFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadTeams
  | LoadTeamsDone
  | LoadTeamsFail
  | UpdateTeams
  | UpdateTeamsDone
  | UpdateTeamsFail;
