import { Action } from '@ngrx/store';

const NAMESPACE = '[AUTH]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

export const Types = {
  SignupRequested: withNamespace('Signup requested'),
  SignupSucceded: withNamespace('Signup Succeeded'),
  SignupFailed: withNamespace('Signup Failed'),
  LoginFormSubmitted: withNamespace('Login From Submitted'),
  AuthenticationRequested: withNamespace('Authentication requested'),
  AuthenticationSucceded: withNamespace('Authentication Succeeded'),
  AuthenticationFailed: withNamespace('Authentication Failed'),
  SignupFormSubmitted: withNamespace('Signup Form Submitted'),
  SignupFormValidationFailed: withNamespace('Signup Form Validation Failed')
};

export class LoginFormSubmitted implements Action {
  readonly type = Types.LoginFormSubmitted;
  constructor(public payload: any) {}
}

export class AuthenticationRequested implements Action {
  readonly type = Types.AuthenticationRequested;
  constructor(public payload: any) {}
}

export class AuthenticationSucceded implements Action {
  readonly type = Types.AuthenticationSucceded;
  constructor(public payload: any) {}
}

export class AuthenticationFailed implements Action {
  readonly type = Types.AuthenticationFailed;
  constructor(public payload: any) {}
}

export class SignupFormSubmitted implements Action {
  readonly type = Types.SignupFormSubmitted;
  constructor(public payload?: any) {}
}

export class SignupRequested implements Action {
  readonly type = Types.SignupRequested;
  constructor(public payload: any) {}
}

export class SignupSucceded implements Action {
  readonly type = Types.SignupSucceded;
  constructor(public payload: any) {}
}

export class SignupFailed implements Action {
  readonly type = Types.SignupFailed;
  constructor(public payload: any) {}
}

export class SignupFormValidationFailed implements Action {
  readonly type = Types.SignupFormValidationFailed;
  constructor(public payload: any) {}
}

export type ActionsUnion =
  | LoginFormSubmitted
  | AuthenticationRequested
  | AuthenticationSucceded
  | AuthenticationFailed
  | SignupFormValidationFailed;
