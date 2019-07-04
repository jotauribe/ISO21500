import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'PLANNING FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadProviders: 'Load Providers',
    LoadProvidersDone: 'Load Providers Done',
    LoadProvidersFail: 'Load Providers Failure',
    UpdateProviders: 'Update Providers',
    UpdateProvidersDone: 'Update Providers Done',
    UpdateProvidersFail: 'Update Providers Failure',
    UploadProviderContract: 'Upload Provider Contract',
    UploadProviderContractDone: 'Upload Provider Contract Done',
    UploadProviderContractFail: 'Upload Provider Contract Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadProviders implements Action {
  readonly type = Types.LoadProviders;
  constructor(public payload?: any) {}
}

export class LoadProvidersDone implements Action {
  readonly type = Types.LoadProvidersDone;
  constructor(public payload?: any) {}
}

export class LoadProvidersFail implements Action {
  readonly type = Types.LoadProvidersFail;
  constructor(public payload?: any) {}
}

export class UpdateProviders implements Action {
  readonly type = Types.UpdateProviders;
  constructor(public payload?: any) {}
}

export class UpdateProvidersDone implements Action {
  readonly type = Types.UpdateProvidersDone;
  constructor(public payload?: any) {}
}

export class UpdateProvidersFail implements Action {
  readonly type = Types.UpdateProvidersFail;
  constructor(public payload?: any) {}
}

export class UploadProviderContract implements Action {
  readonly type = Types.UploadProviderContract;
  constructor(public payload?: any) {}
}

export class UploadProviderContractDone implements Action {
  readonly type = Types.UploadProviderContractDone;
  constructor(public payload?: any) {}
}

export class UploadProviderContractFail implements Action {
  readonly type = Types.UploadProviderContractFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadProviders
  | LoadProvidersDone
  | LoadProvidersFail
  | UpdateProviders
  | UpdateProvidersDone
  | UpdateProvidersFail
  | UploadProviderContract
  | UploadProviderContractDone
  | UploadProviderContractFail;
