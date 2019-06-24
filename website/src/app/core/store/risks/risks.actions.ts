import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'PLANNING FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadRisks: 'Load Risks',
    LoadRisksDone: 'Load Risks Done',
    LoadRisksFail: 'Load Risks Failure',
    UpdateRisks: 'Update Risks',
    UpdateRisksDone: 'Update Risks Done',
    UpdateRisksFail: 'Update Risks Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadRisks implements Action {
  readonly type = Types.LoadRisks;
  constructor(public payload?: any) {}
}

export class LoadRisksDone implements Action {
  readonly type = Types.LoadRisksDone;
  constructor(public payload?: any) {}
}

export class LoadRisksFail implements Action {
  readonly type = Types.LoadRisksFail;
  constructor(public payload?: any) {}
}

export class UpdateRisks implements Action {
  readonly type = Types.UpdateRisks;
  constructor(public payload?: any) {}
}

export class UpdateRisksDone implements Action {
  readonly type = Types.UpdateRisksDone;
  constructor(public payload?: any) {}
}

export class UpdateRisksFail implements Action {
  readonly type = Types.UpdateRisksFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadRisks
  | LoadRisksDone
  | LoadRisksFail
  | UpdateRisks
  | UpdateRisksDone
  | UpdateRisksFail;
