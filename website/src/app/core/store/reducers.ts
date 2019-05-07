import { ActionReducerMap, Store } from '@ngrx/store';
// import { RouterReducerState } from '@ngrx/router-store';

// reducers
import { HeaderActions, HeaderState, headerReducer } from './header';
import { AuthActions, AuthState, authReducer } from './auth';
// import { RouterState, routerReducer } from './router';

// The top level Echoes Player application interface
// each reducer is reponsible for manipulating a certain state
export interface CoreState {
  header: HeaderState;
  auth: AuthState;
  // router: RouterReducerState;
}

export const CoreReducers: ActionReducerMap<CoreState> = {
  header: headerReducer,
  auth: authReducer
  // router: routerReducer
};

export const CoreActionTypes = [HeaderActions.Types, AuthActions.Types];
