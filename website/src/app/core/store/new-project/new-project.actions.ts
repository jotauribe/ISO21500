import { Action } from '@ngrx/store';

const NAMESPACE = '[NEW PROJECT DIALOG]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

export const Types = {
  OpenDialog: withNamespace('Dialog Opened'),
  CloseDialog: withNamespace('Dialog Close'),
  ResultDialog: withNamespace('Dialog  Result')
};

export class OpenDialog implements Action {
  readonly type = Types.OpenDialog;
}

export class CloseDialog implements Action {
  readonly type = Types.CloseDialog;
}

export class ResultDialog implements Action {
  readonly type = Types.ResultDialog;
  constructor(public payload: { animal: string }) {}
}

export type ActionsUnion = OpenDialog | CloseDialog | ResultDialog;
