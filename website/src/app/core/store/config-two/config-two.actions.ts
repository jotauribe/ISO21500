import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'CONFIG TWO FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadConfigTwo: 'Load ConfigTwo',
    LoadConfigTwoDone: 'Load ConfigTwo Done',
    LoadConfigTwoFail: 'Load ConfigTwo Failure',
    UpdateConfigTwo: 'Update ConfigTwo',
    UpdateConfigTwoDone: 'Update ConfigTwo Done',
    UpdateConfigTwoFail: 'Update ConfigTwo Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadConfigTwo implements Action {
  readonly type = Types.LoadConfigTwo;
  constructor(public payload?: any) {}
}

export class LoadConfigTwoDone implements Action {
  readonly type = Types.LoadConfigTwoDone;
  constructor(public payload?: any) {}
}

export class LoadConfigTwoFail implements Action {
  readonly type = Types.LoadConfigTwoFail;
  constructor(public payload?: any) {}
}

export class UpdateConfigTwo implements Action {
  readonly type = Types.UpdateConfigTwo;
  constructor(public payload?: any) {}
}

export class UpdateConfigTwoDone implements Action {
  readonly type = Types.UpdateConfigTwoDone;
  constructor(public payload?: any) {}
}

export class UpdateConfigTwoFail implements Action {
  readonly type = Types.UpdateConfigTwoFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadConfigTwo
  | LoadConfigTwoDone
  | LoadConfigTwoFail
  | UpdateConfigTwo
  | UpdateConfigTwoDone
  | UpdateConfigTwoFail;
