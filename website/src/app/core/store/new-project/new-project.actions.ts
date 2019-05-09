import { Action } from '@ngrx/store';

const NAMESPACE = '[NEW PROJECT DIALOG]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

export const Types = {
  OpenDialog: withNamespace('Open Dialog'),
  DialogOpened: withNamespace('Dialog Opened'),
  CloseDialog: withNamespace('Dialog Close'),
  CreateProject: withNamespace('Create Project Request'),
  CreateProjectDone: withNamespace('Create Project Done'),
  CreateProjectFail: withNamespace('Create Project Failure')
};

export class OpenDialog implements Action {
  readonly type = Types.OpenDialog;
  constructor(public payload?: any) {}
}

export class DialogOpened implements Action {
  readonly type = Types.DialogOpened;
  constructor(public payload?: any) {}
}

export class CloseDialog implements Action {
  readonly type = Types.CloseDialog;
  constructor(public payload?: any) {}
}

export class CreateProject implements Action {
  readonly type = Types.CreateProject;
  constructor(public payload: any) {}
}

export class CreateProjectDone implements Action {
  readonly type = Types.CreateProjectDone;
  constructor(public payload: any) {}
}

export class CreateProjectFail implements Action {
  readonly type = Types.CreateProjectFail;
  constructor(public payload: any) {}
}

export type ActionsUnion =
  | OpenDialog
  | DialogOpened
  | CloseDialog
  | CreateProject
  | CreateProjectDone
  | CreateProjectFail;
