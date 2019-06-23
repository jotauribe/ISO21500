import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'TEAM MANAGEMENT FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadTeamManagement: 'Load TeamManagement',
    LoadTeamManagementDone: 'Load TeamManagement Done',
    LoadTeamManagementFail: 'Load TeamManagement Failure',
    UpdateTeamManagement: 'Update TeamManagement',
    UpdateTeamManagementDone: 'Update TeamManagement Done',
    UpdateTeamManagementFail: 'Update TeamManagement Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadTeamManagement implements Action {
  readonly type = Types.LoadTeamManagement;
  constructor(public payload?: any) {}
}

export class LoadTeamManagementDone implements Action {
  readonly type = Types.LoadTeamManagementDone;
  constructor(public payload?: any) {}
}

export class LoadTeamManagementFail implements Action {
  readonly type = Types.LoadTeamManagementFail;
  constructor(public payload?: any) {}
}

export class UpdateTeamManagement implements Action {
  readonly type = Types.UpdateTeamManagement;
  constructor(public payload?: any) {}
}

export class UpdateTeamManagementDone implements Action {
  readonly type = Types.UpdateTeamManagementDone;
  constructor(public payload?: any) {}
}

export class UpdateTeamManagementFail implements Action {
  readonly type = Types.UpdateTeamManagementFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadTeamManagement
  | LoadTeamManagementDone
  | LoadTeamManagementFail
  | UpdateTeamManagement
  | UpdateTeamManagementDone
  | UpdateTeamManagementFail;
