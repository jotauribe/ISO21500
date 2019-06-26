import { Types, ActionsUnion } from './teams.actions';
import { TeamsState } from './teams.state';
import * as _ from 'lodash';

export const initialState: TeamsState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function teamsReducer(
  state: TeamsState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadTeamsDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateTeams:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: [action.payload, ...state.data]
      };
    default:
      return state;
  }
}
