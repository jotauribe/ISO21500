import { Types, ActionsUnion } from './team-management.actions';
import { TeamManagementState } from './team-management.state';
import * as _ from 'lodash';

export const initialState: TeamManagementState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function teamManagementReducer(
  state: TeamManagementState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadTeamManagementDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateTeamManagement:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: [action.payload, ...state.data]
      };
    case Types.UpdateTeamManagement:
      state.data.teamOrganization =
        action.payload.teamManagement.teamOrganization;
      return state;

    default:
      return state;
  }
}
