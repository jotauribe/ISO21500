import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'CONSTITUTION FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadPrevInfo: 'Load PrevInfo',
    LoadPrevInfoDone: 'Load PrevInfo Done',
    LoadPrevInfoFail: 'Load PrevInfo Failure',
    SavePrevInfo: 'Save PrevInfo',
    SavePrevInfoDone: 'Save PrevInfo Done',
    SavePrevInfoFail: 'Save PrevInfo Failure',
    LoadObjectives: 'Load Objectives',
    LoadObjectivesDone: 'Load Objectives Done',
    LoadObjectivesFail: 'Load Objectives Failure',
    SaveObjectives: 'Save Objectives',
    SaveObjectivesDone: 'Save Objectives Done',
    SaveObjectivesFail: 'Save Objectives Failure'
  },
  NAMESPACE
);

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

export class LoadObjectives implements Action {
  readonly type = Types.LoadObjectives;
  constructor(public payload?: any) {}
}

export class LoadObjectivesDone implements Action {
  readonly type = Types.LoadObjectivesDone;
  constructor(public payload?: any) {}
}

export class LoadObjectivesFail implements Action {
  readonly type = Types.LoadObjectivesFail;
  constructor(public payload?: any) {}
}

export class SaveObjectives implements Action {
  readonly type = Types.SaveObjectives;
  constructor(public payload?: any) {}
}

export class SaveObjectivesDone implements Action {
  readonly type = Types.SaveObjectivesDone;
  constructor(public payload?: any) {}
}

export class SaveObjectivesFail implements Action {
  readonly type = Types.SaveObjectivesFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadPrevInfo
  | LoadPrevInfoDone
  | LoadPrevInfoFail
  | SavePrevInfo
  | SavePrevInfoDone
  | SavePrevInfoFail
  | LoadObjectives
  | LoadObjectivesDone
  | LoadObjectivesFail
  | SaveObjectives
  | SaveObjectivesDone
  | SaveObjectivesFail;
