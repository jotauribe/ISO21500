import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'CONSTITUTION FORM';

// Action Types
export const Types = applyActionNamespace({
  LoadPrevInfo: 'Load PrevInfo',
  LoadPrevInfoDone: 'Load PrevInfo Done',
  LoadPrevInfoFail: 'Load PrevInfo Failure',
  SavePrevInfo: 'Save PrevInfo',
  SavePrevInfoDone: 'Save PrevInfo Done',
  SavePrevInfoFail: 'Save PrevInfo Failure'
}, NAMESPACE);

// Action Creators
export class LoadPrevInfo implements Action {
  readonly type = Types.LoadPrevInfo;
  constructor(public payload?: any) {}
}

export class LoadPrevInfoDone implements Action {
  readonly type = Types.LoadPrevInfoDone;
  constructor(public payload?: any) {}
}

export class LoadPrevInfoFail implements Action {
  readonly type = Types.LoadPrevInfoFail;
  constructor(public payload?: any) {}
}

export class SavePrevInfo implements Action {
  readonly type = Types.SavePrevInfo;
  constructor(public payload?: any) {}
}

export class SavePrevInfoDone implements Action {
  readonly type = Types.SavePrevInfoDone;
  constructor(public payload?: any) {}
}

export class SavePrevInfoFail implements Action {
  readonly type = Types.SavePrevInfoFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadPrevInfo
  | LoadPrevInfoDone
  | LoadPrevInfoFail
  | SavePrevInfo
  | SavePrevInfoDone
  | SavePrevInfoFail;
