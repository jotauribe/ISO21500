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
import { PlanningActions, PlanningState, planningReducer } from './planning';
import {
  ConfigOneActions,
  ConfigOneState,
  configOneReducer
} from './config-one';
import {
  ConfigTwoActions,
  ConfigTwoState,
  configTwoReducer
} from './config-two';
import { ChangesActions, ChangesState, changesReducer } from './changes';
import { LessonsActions, LessonsState, lessonsReducer } from './lessons';
import { TeamsActions, TeamsState, teamsReducer } from './teams';
import { MembersActions, MembersState, membersReducer } from './members';
import {
  TeamManagementActions,
  TeamManagementState,
  teamManagementReducer
} from './team-management';
import {
  ActivitiesActions,
  ActivitiesState,
  activitiesReducer
} from './activities';
import {
  ResourcesActions,
  ResourcesState,
  resourcesReducer
} from './resources';

// each reducer is reponsible for manipulating a certain state
export interface CoreState {
  header: HeaderState;
  auth: AuthState;
  constitution: ConstitutionState;
  projects: ProjectsState;
  newProjectDialog: NewProjectState;
  planning: PlanningState;
  configOne: ConfigOneState;
  configTwo: ConfigTwoState;
  changes: ChangesState;
  lessons: LessonsState;
  teams: TeamsState;
  members: MembersState;
  teamManagement: TeamManagementState;
  activities: ActivitiesState;
  resources: ResourcesState;
  // router: RouterReducerState;
}

export const CoreReducers: ActionReducerMap<CoreState> = {
  header: headerReducer,
  auth: authReducer,
  constitution: constitutionReducer,
  projects: projectsReducer,
  newProjectDialog: newProjectReducer,
  planning: planningReducer,
  configOne: configOneReducer,
  configTwo: configTwoReducer,
  changes: changesReducer,
  lessons: lessonsReducer,
  teams: teamsReducer,
  members: membersReducer,
  teamManagement: teamManagementReducer,
  activities: activitiesReducer,
  resources: resourcesReducer
  // router: routerReducer
};

export const CoreActionTypes = [
  HeaderActions.Types,
  AuthActions.Types,
  NewProjectActions.Types,
  NewProjectActions.Types,
  ConstitutionActions.Types,
  ProjectsActions.Types,
  PlanningActions.Types,
  ConfigOneActions.Types,
  ConfigTwoActions.Types,
  ChangesActions.Types,
  LessonsActions.Types,
  TeamsActions.Types,
  MembersActions.Types,
  TeamManagementActions.Types,
  ActivitiesActions.Types,
  ResourcesActions.Types
];
