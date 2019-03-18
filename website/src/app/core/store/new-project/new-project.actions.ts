import { Action } from '@ngrx/store';

const NAMESPACE = '[NEW PROJECT DIALOG]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

export const Types = {
  OpenDialog: withNamespace('Open Dialog'),
  CloseDialog: withNamespace('Dialog Close'),
  CreateProject: withNamespace('Create Project Request'),
  CreateProjectDone: withNamespace('Create Project Done'),
  CreateProjectFail: withNamespace('Create Project Failure')
};

export class OpenDialog implements Action {
  readonly type = Types.OpenDialog;
}

export class CloseDialog implements Action {
  readonly type = Types.CloseDialog;
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
  | CloseDialog
  | CreateProject
  | CreateProjectDone
  | CreateProjectFail;
