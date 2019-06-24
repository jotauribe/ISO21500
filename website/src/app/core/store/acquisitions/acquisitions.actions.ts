import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'PLANNING FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadAcquisitions: 'Load Acquisitions',
    LoadAcquisitionsDone: 'Load Acquisitions Done',
    LoadAcquisitionsFail: 'Load Acquisitions Failure',
    UpdateAcquisitions: 'Update Acquisitions',
    UpdateAcquisitionsDone: 'Update Acquisitions Done',
    UpdateAcquisitionsFail: 'Update Acquisitions Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadAcquisitions implements Action {
  readonly type = Types.LoadAcquisitions;
  constructor(public payload?: any) {}
}

export class LoadAcquisitionsDone implements Action {
  readonly type = Types.LoadAcquisitionsDone;
  constructor(public payload?: any) {}
}

export class LoadAcquisitionsFail implements Action {
  readonly type = Types.LoadAcquisitionsFail;
  constructor(public payload?: any) {}
}

export class UpdateAcquisitions implements Action {
  readonly type = Types.UpdateAcquisitions;
  constructor(public payload?: any) {}
}

export class UpdateAcquisitionsDone implements Action {
  readonly type = Types.UpdateAcquisitionsDone;
  constructor(public payload?: any) {}
}

export class UpdateAcquisitionsFail implements Action {
  readonly type = Types.UpdateAcquisitionsFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadAcquisitions
  | LoadAcquisitionsDone
  | LoadAcquisitionsFail
  | UpdateAcquisitions
  | UpdateAcquisitionsDone
  | UpdateAcquisitionsFail;
