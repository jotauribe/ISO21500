import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'PLANNING FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadResources: 'Load Resources',
    LoadResourcesDone: 'Load Resources Done',
    LoadResourcesFail: 'Load Resources Failure',
    UpdateResources: 'Update Resources',
    UpdateResourcesDone: 'Update Resources Done',
    UpdateResourcesFail: 'Update Resources Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadResources implements Action {
  readonly type = Types.LoadResources;
  constructor(public payload?: any) {}
}

export class LoadResourcesDone implements Action {
  readonly type = Types.LoadResourcesDone;
  constructor(public payload?: any) {}
}

export class LoadResourcesFail implements Action {
  readonly type = Types.LoadResourcesFail;
  constructor(public payload?: any) {}
}

export class UpdateResources implements Action {
  readonly type = Types.UpdateResources;
  constructor(public payload?: any) {}
}

export class UpdateResourcesDone implements Action {
  readonly type = Types.UpdateResourcesDone;
  constructor(public payload?: any) {}
}

export class UpdateResourcesFail implements Action {
  readonly type = Types.UpdateResourcesFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadResources
  | LoadResourcesDone
  | LoadResourcesFail
  | UpdateResources
  | UpdateResourcesDone
  | UpdateResourcesFail;
