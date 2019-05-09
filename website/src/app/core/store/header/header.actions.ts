import { Action } from '@ngrx/store';

const NAMESPACE = '[HEADER MENU]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

// Action Types
export const Types = {
  NewProjectOptionClicked: withNamespace('Create Project Option Clicked')
};

// Action Creators
export class CreateProject implements Action {
  readonly type = Types.NewProjectOptionClicked;

  constructor(public payload?: any) {}
}

export type ActionsUnion = CreateProject;
