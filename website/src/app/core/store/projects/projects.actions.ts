import { Action } from '@ngrx/store';

const NAMESPACE = '[PROJECTS PAGE]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

export const Types = {
  FetchProjects: withNamespace('Fetch Projects Request'),
  FetchProjectsDone: withNamespace('Fetch Projects Done'),
  FetchProjectsFailure: withNamespace('Fetch Projects Failure'),
  FetchActiveProject: withNamespace('Fetch Active Project Request'),
  FetchActiveProjectDone: withNamespace('Fetch Active Project Done'),
  FetchActiveProjectFailure: withNamespace('Fetch Active Project Failure')
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

export class FetchActiveProject implements Action {
  readonly type = Types.FetchActiveProject;
  constructor(public payload?: any) {}
}

export class FetchActiveProjectDone implements Action {
  readonly type = Types.FetchActiveProjectDone;
  constructor(public payload: any) {}
}

export class FetchActiveProjectFailure implements Action {
  readonly type = Types.FetchActiveProjectFailure;
  constructor(public payload: any) {}
}

export type ActionsUnion =
  | FetchProjects
  | FetchProjectsDone
  | FetchProjectsFailure
  | FetchActiveProject
  | FetchActiveProjectDone
  | FetchActiveProjectFailure;
