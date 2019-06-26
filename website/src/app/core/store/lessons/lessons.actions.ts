import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'LESSONS FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadLessons: 'Load Lessons',
    LoadLessonsDone: 'Load Lessons Done',
    LoadLessonsFail: 'Load Lessons Failure',
    UpdateLessons: 'Update Lessons',
    UpdateLessonsDone: 'Update Lessons Done',
    UpdateLessonsFail: 'Update Lessons Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadLessons implements Action {
  readonly type = Types.LoadLessons;
  constructor(public payload?: any) {}
}

export class LoadLessonsDone implements Action {
  readonly type = Types.LoadLessonsDone;
  constructor(public payload?: any) {}
}

export class LoadLessonsFail implements Action {
  readonly type = Types.LoadLessonsFail;
  constructor(public payload?: any) {}
}

export class UpdateLessons implements Action {
  readonly type = Types.UpdateLessons;
  constructor(public payload?: any) {}
}

export class UpdateLessonsDone implements Action {
  readonly type = Types.UpdateLessonsDone;
  constructor(public payload?: any) {}
}

export class UpdateLessonsFail implements Action {
  readonly type = Types.UpdateLessonsFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadLessons
  | LoadLessonsDone
  | LoadLessonsFail
  | UpdateLessons
  | UpdateLessonsDone
  | UpdateLessonsFail;
