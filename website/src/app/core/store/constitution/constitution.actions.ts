import { Action } from '@ngrx/store';

const NAMESPACE = '[CONSTITUTION FORM]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

// Action Types
export const Types = {
  LoadInfo: withNamespace('Load Info'),
  LoadInfoDone: withNamespace('Load Info Done'),
  LoadInfoFail: withNamespace('Load Info Failure'),
  SaveInfo: withNamespace('Save Info'),
  SaveInfoDone: withNamespace('Save Info Done'),
  SaveInfoFail: withNamespace('Save Info Failure')
};

// Action Creators
export class LoadInfo implements Action {
  readonly type = Types.LoadInfo;

  constructor(public payload?: any) {}
}

export class LoadInfoDone implements Action {
  readonly type = Types.LoadInfoDone;

  constructor(public payload?: any) {}
}

export class LoadInfoFail implements Action {
  readonly type = Types.LoadInfoFail;

  constructor(public payload?: any) {}
}

export class SaveInfo implements Action {
  readonly type = Types.SaveInfo;

  constructor(public payload?: any) {}
}

export class SaveInfoDone implements Action {
  readonly type = Types.SaveInfoDone;

  constructor(public payload?: any) {}
}

export class SaveInfoFail implements Action {
  readonly type = Types.SaveInfoFail;

  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadInfo
  | LoadInfoDone
  | LoadInfoFail
  | SaveInfo
  | SaveInfoDone
  | SaveInfoFail;
