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
    SaveObjectivesFail: 'Save Objectives Failure',
    CreateObjectives: 'Create Objectives',
    CreateObjectivesDone: 'Create Objectives Done',
    CreateObjectivesFail: 'Create Objectives Failure',
    LoadPhases: 'Load Phases',
    LoadPhasesDone: 'Load Phases Done',
    LoadPhasesFail: 'Load Phases Failure',
    SavePhases: 'Save Phases',
    SavePhasesDone: 'Save Phases Done',
    SavePhasesFail: 'Save Phases Failure',
    CreatePhases: 'Create Phases',
    CreatePhasesDone: 'Create Phases Done',
    CreatePhasesFail: 'Create Phases Failure'
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

export class CreateObjectives implements Action {
  readonly type = Types.CreateObjectives;
  constructor(public payload?: any) {}
}

export class CreateObjectivesDone implements Action {
  readonly type = Types.CreateObjectivesDone;
  constructor(public payload?: any) {}
}

export class CreateObjectivesFail implements Action {
  readonly type = Types.CreateObjectivesFail;
  constructor(public payload?: any) {}
}

export class LoadPhases implements Action {
  readonly type = Types.LoadPhases;
  constructor(public payload?: any) {}
}

export class LoadPhasesDone implements Action {
  readonly type = Types.LoadPhasesDone;
  constructor(public payload?: any) {}
}

export class LoadPhasesFail implements Action {
  readonly type = Types.LoadPhasesFail;
  constructor(public payload?: any) {}
}

export class SavePhases implements Action {
  readonly type = Types.SavePhases;
  constructor(public payload?: any) {}
}

export class SavePhasesDone implements Action {
  readonly type = Types.SavePhasesDone;
  constructor(public payload?: any) {}
}

export class SavePhasesFail implements Action {
  readonly type = Types.SavePhasesFail;
  constructor(public payload?: any) {}
}

export class CreatePhases implements Action {
  readonly type = Types.CreatePhases;
  constructor(public payload?: any) {}
}

export class CreatePhasesDone implements Action {
  readonly type = Types.CreatePhasesDone;
  constructor(public payload?: any) {}
}

export class CreatePhasesFail implements Action {
  readonly type = Types.CreatePhasesFail;
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
  | SaveObjectivesFail
  | CreateObjectives
  | CreateObjectivesDone
  | CreateObjectivesFail
  | LoadPhases
  | LoadPhasesDone
  | LoadPhasesFail
  | SavePhases
  | SavePhasesDone
  | SavePhasesFail
  | CreatePhases
  | CreatePhasesDone
  | CreatePhasesFail;
