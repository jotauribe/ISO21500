import { Types, ActionsUnion } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isAuthInProgress: false,
  isUserAuthenticated: false,
  user: null
};

export function authReducer(
  state: AuthState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.ValidateAuthState:
      return {...state, isUserAuthenticated: true};
    case Types.AuthenticationRequested:
      return { ...state, isAuthInProgress: true };
    case Types.SignupSucceded:
    case Types.AuthenticationSucceded:
      return {
        ...state,
        user: action.payload,
        isUserAuthenticated: true,
        isAuthInProgress: false
      };
    case Types.AuthenticationFailed:
      return {
        ...state,
        isAuthInProgress: false
      };
    default:
      return state;
  }
}
