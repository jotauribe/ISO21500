import { NewProjectEffects } from './new-project/new-project.effects';
import { ActionReducerMap, Store } from '@ngrx/store';
// import { RouterReducerState } from '@ngrx/router-store';
// import { RouterState, routerReducer } from "./router";

// reducers
import { HeaderActions, HeaderState, headerReducer } from './header';
import {
  NewProjectActions,
  NewProjectState,
  newProjectReducer
} from './new-project';
import { AuthActions, AuthState, authReducer } from './auth';
import {
  ConstitutionActions,
  ConstitutionState,
  constitutionReducer
} from './constitution';
import { ProjectsActions, ProjectsState, projectsReducer } from './projects';

// each reducer is reponsible for manipulating a certain state
export interface CoreState {
  header: HeaderState;
  auth: AuthState;
  constitution: ConstitutionState;
  projects: ProjectsState;
  newProjectDialog: NewProjectState;
  // router: RouterReducerState;
}

export const CoreReducers: ActionReducerMap<CoreState> = {
  header: headerReducer,
  auth: authReducer,
  constitution: constitutionReducer,
  projects: projectsReducer,
  newProjectDialog: newProjectReducer
  // router: routerReducer
};

export const CoreActionTypes = [
  HeaderActions.Types,
  AuthActions.Types,
  NewProjectActions.Types,
  NewProjectActions.Types,
  ConstitutionActions.Types,
  ProjectsActions.Types
];
