import { NewProjectEffects } from "./new-project/new-project.effects";
import { ActionReducerMap, Store } from "@ngrx/store";
// import { RouterReducerState } from '@ngrx/router-store';

// reducers
import { HeaderActions, HeaderState, headerReducer } from "./header";
import { NewProjectActions } from "./new-project";
import { AuthActions, AuthState, authReducer } from "./auth";
import {
  ConstitutionActions,
  ConstitutionState,
  constitutionReducer
} from "./constitution";
import { RouterState, routerReducer } from "./router";

// each reducer is reponsible for manipulating a certain state
export interface CoreState {
  header: HeaderState;
  auth: AuthState;
  constitution: ConstitutionState;
  // router: RouterReducerState;
}

export const CoreReducers: ActionReducerMap<CoreState> = {
  header: headerReducer,
  auth: authReducer,
  constitution: constitutionReducer
  // router: routerReducer
};

export const CoreActionTypes = [
  HeaderActions.Types,
  AuthActions.Types,
  NewProjectActions.Types,
  NewProjectActions.Types,
  ConstitutionActions.Types
];
