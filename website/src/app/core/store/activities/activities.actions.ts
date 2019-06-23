import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'PLANNING FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadActivities: 'Load Activities',
    LoadActivitiesDone: 'Load Activities Done',
    LoadActivitiesFail: 'Load Activities Failure',
    UpdateActivities: 'Update Activities',
    UpdateActivitiesDone: 'Update Activities Done',
    UpdateActivitiesFail: 'Update Activities Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadActivities implements Action {
  readonly type = Types.LoadActivities;
  constructor(public payload?: any) {}
}

export class LoadActivitiesDone implements Action {
  readonly type = Types.LoadActivitiesDone;
  constructor(public payload?: any) {}
}

export class LoadActivitiesFail implements Action {
  readonly type = Types.LoadActivitiesFail;
  constructor(public payload?: any) {}
}

export class UpdateActivities implements Action {
  readonly type = Types.UpdateActivities;
  constructor(public payload?: any) {}
}

export class UpdateActivitiesDone implements Action {
  readonly type = Types.UpdateActivitiesDone;
  constructor(public payload?: any) {}
}

export class UpdateActivitiesFail implements Action {
  readonly type = Types.UpdateActivitiesFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadActivities
  | LoadActivitiesDone
  | LoadActivitiesFail
  | UpdateActivities
  | UpdateActivitiesDone
  | UpdateActivitiesFail;
