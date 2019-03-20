import { ActionReducerMap, Store } from '@ngrx/store';
// import { RouterReducerState } from '@ngrx/router-store';

// reducers
import { HeaderActions, HeaderState, headerReducer } from './header';
import { RouterState, routerReducer } from './router';

// The top level Echoes Player application interface
// each reducer is reponsible for manipulating a certain state
export interface CoreState {
  header: HeaderState;
  // router: RouterReducerState;
}

export const CoreReducers: ActionReducerMap<CoreState> = {
  header: headerReducer
  // router: routerReducer
};

export const CoreActionTypes = [HeaderActions.Types];
