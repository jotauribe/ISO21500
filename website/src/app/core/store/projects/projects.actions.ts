import { Action } from '@ngrx/store';

const NAMESPACE = '[PROJECTS PAGE]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

export const Types = {
  FetchProjects: withNamespace('Fetch Projects Request'),
  FetchProjectsDone: withNamespace('Fetch Projects Done'),
  FetchProjectsFailure: withNamespace('Fetch Projects Failure')
};

export class FetchProjects implements Action {
  readonly type = Types.FetchProjects;
  constructor(public payload?: any) {}
}

export class FetchProjectsDone implements Action {
  readonly type = Types.FetchProjectsDone;
  constructor(public payload: any) {}
}

export class FetchProjectsFailure implements Action {
  readonly type = Types.FetchProjectsFailure;
  constructor(public payload: any) {}
}

export type ActionsUnion =
  | FetchProjects
  | FetchProjectsDone
  | FetchProjectsFailure;
