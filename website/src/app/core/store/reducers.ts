import { NewProjectEffects } from './new-project/new-project.effects';
import { ActionReducerMap, Store } from '@ngrx/store';
// import { RouterReducerState } from '@ngrx/router-store';

// reducers
import { HeaderActions, HeaderState, headerReducer } from './header';
import { NewProjectActions } from './new-project';
import {
  ConstitutionActions,
  ConstitutionState,
  constitutionReducer
} from './constitution';
import { RouterState, routerReducer } from './router';

// The top level Echoes Player application interface
// each reducer is reponsible for manipulating a certain state
export interface CoreState {
  header: HeaderState;
  constitution: ConstitutionState;
  // router: RouterReducerState;
}

export const CoreReducers: ActionReducerMap<CoreState> = {
  header: headerReducer,
  constitution: constitutionReducer
  // router: routerReducer
};

export const CoreActionTypes = [HeaderActions.Types, NewProjectActions.Types];
