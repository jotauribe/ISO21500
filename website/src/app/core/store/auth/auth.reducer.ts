import { Types, ActionsUnion } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isUserAuthenticated: false,
  user: null
};

export function authReducer(
  state: AuthState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.AuthenticationSucceded:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
