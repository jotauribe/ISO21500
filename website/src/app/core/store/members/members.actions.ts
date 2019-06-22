import { Action } from '@ngrx/store';
import { applyActionNamespace } from '~/app/utils';

const NAMESPACE = 'CHANGES FORM';

// Action Types
export const Types: any = applyActionNamespace(
  {
    LoadMembers: 'Load Members',
    LoadMembersDone: 'Load Members Done',
    LoadMembersFail: 'Load Members Failure',
    UpdateMembers: 'Update Members',
    UpdateMembersDone: 'Update Members Done',
    UpdateMembersFail: 'Update Members Failure'
  },
  NAMESPACE
);

// Action Creators
export class LoadMembers implements Action {
  readonly type = Types.LoadMembers;
  constructor(public payload?: any) {}
}

export class LoadMembersDone implements Action {
  readonly type = Types.LoadMembersDone;
  constructor(public payload?: any) {}
}

export class LoadMembersFail implements Action {
  readonly type = Types.LoadMembersFail;
  constructor(public payload?: any) {}
}

export class UpdateMembers implements Action {
  readonly type = Types.UpdateMembers;
  constructor(public payload?: any) {}
}

export class UpdateMembersDone implements Action {
  readonly type = Types.UpdateMembersDone;
  constructor(public payload?: any) {}
}

export class UpdateMembersFail implements Action {
  readonly type = Types.UpdateMembersFail;
  constructor(public payload?: any) {}
}

export type ActionsUnion =
  | LoadMembers
  | LoadMembersDone
  | LoadMembersFail
  | UpdateMembers
  | UpdateMembersDone
  | UpdateMembersFail;
