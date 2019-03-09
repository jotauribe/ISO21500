import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

const NAMESPACE = '[ROUTER]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

export const Types = {
  GO: withNamespace('Go'),
  BACK: withNamespace('Back'),
  FORWARD: withNamespace('Forward')
};

export class Go implements Action {
  readonly type = Types.GO;

  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = Types.BACK;
}

export class Forward implements Action {
  readonly type = Types.FORWARD;
}

export type ActionsUnion = Go | Back | Forward;
