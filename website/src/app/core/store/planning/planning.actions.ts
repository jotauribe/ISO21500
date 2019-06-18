import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'CONSTITUTION FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadPlanning: 'Load Planning',
    LoadPlanningDone: 'Load Planning Done',
    LoadPlanningFail: 'Load Planning Failure',
    UpdatePlanning: 'Update Planning',
    UpdatePlanningDone: 'Update Planning Done',
    UpdatePlanningFail: 'Update Planning Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadPlanning implements Action {
  readonly type = Types.LoadPlanning;
  constructor(public payload?: any) {}
}

export class LoadPlanningDone implements Action {
  readonly type = Types.LoadPlanningDone;
  constructor(public payload?: any) {}
}

export class LoadPlanningFail implements Action {
  readonly type = Types.LoadPlanningFail;
  constructor(public payload?: any) {}
}

export class UpdatePlanning implements Action {
  readonly type = Types.UpdatePlanning;
  constructor(public payload?: any) {}
}

export class UpdatePlanningDone implements Action {
  readonly type = Types.UpdatePlanningDone;
  constructor(public payload?: any) {}
}

export class UpdatePlanningFail implements Action {
  readonly type = Types.UpdatePlanningFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadPlanning
  | LoadPlanningDone
  | LoadPlanningFail
  | UpdatePlanning
  | UpdatePlanningDone
  | UpdatePlanningFail;
