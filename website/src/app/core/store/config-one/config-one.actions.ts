import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'ConfigOne FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadConfigOne: 'Load ConfigOne',
    LoadConfigOneDone: 'Load ConfigOne Done',
    LoadConfigOneFail: 'Load ConfigOne Failure',
    UpdateConfigOne: 'Update ConfigOne',
    UpdateConfigOneDone: 'Update ConfigOne Done',
    UpdateConfigOneFail: 'Update ConfigOne Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadConfigOne implements Action {
  readonly type = Types.LoadConfigOne;
  constructor(public payload?: any) {}
}

export class LoadConfigOneDone implements Action {
  readonly type = Types.LoadConfigOneDone;
  constructor(public payload?: any) {}
}

export class LoadConfigOneFail implements Action {
  readonly type = Types.LoadConfigOneFail;
  constructor(public payload?: any) {}
}

export class UpdateConfigOne implements Action {
  readonly type = Types.UpdateConfigOne;
  constructor(public payload?: any) {}
}

export class UpdateConfigOneDone implements Action {
  readonly type = Types.UpdateConfigOneDone;
  constructor(public payload?: any) {}
}

export class UpdateConfigOneFail implements Action {
  readonly type = Types.UpdateConfigOneFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadConfigOne
  | LoadConfigOneDone
  | LoadConfigOneFail
  | UpdateConfigOne
  | UpdateConfigOneDone
  | UpdateConfigOneFail;
