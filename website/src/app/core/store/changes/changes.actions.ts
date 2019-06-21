import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'PLANNING FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadChanges: 'Load Changes',
    LoadChangesDone: 'Load Changes Done',
    LoadChangesFail: 'Load Changes Failure',
    UpdateChanges: 'Update Changes',
    UpdateChangesDone: 'Update Changes Done',
    UpdateChangesFail: 'Update Changes Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadChanges implements Action {
  readonly type = Types.LoadChanges;
  constructor(public payload?: any) {}
}

export class LoadChangesDone implements Action {
  readonly type = Types.LoadChangesDone;
  constructor(public payload?: any) {}
}

export class LoadChangesFail implements Action {
  readonly type = Types.LoadChangesFail;
  constructor(public payload?: any) {}
}

export class UpdateChanges implements Action {
  readonly type = Types.UpdateChanges;
  constructor(public payload?: any) {}
}

export class UpdateChangesDone implements Action {
  readonly type = Types.UpdateChangesDone;
  constructor(public payload?: any) {}
}

export class UpdateChangesFail implements Action {
  readonly type = Types.UpdateChangesFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadChanges
  | LoadChangesDone
  | LoadChangesFail
  | UpdateChanges
  | UpdateChangesDone
  | UpdateChangesFail;
