import { Types, ActionsUnion } from './constitution.actions';
import { ConstitutionState } from './constitution.state';
import * as _ from 'lodash';

export const initialState: ConstitutionState = {
  previousInformation: {
    isLoaded: false,
    isLoading: false,
    data: null
  },
  objectives: {
    isLoaded: false,
    isLoading: false,
    data: []
  },
  milestones: {
    isLoaded: false,
    isLoading: false,
    data: []
  }
};

export function constitutionReducer(
  state: ConstitutionState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.SavePrevInfoDone:
      return {
        ...state,
        previousInformation: {
          ...state.previousInformation,
          isLoaded: true,
          isLoading: false,
          data: action.payload
        }
      };
    case Types.LoadPrevInfoDone:
      return {
        ...state,
        previousInformation: {
          ...state.previousInformation,
          isLoaded: true,
          isLoading: false,
          data: action.payload
        }
      };
    case Types.LoadObjectivesDone:
      return {
        ...state,
        objectives: {
          ...state.objectives,
          isLoaded: true,
          isLoading: false,
          data: _.orderBy(action.payload, ['_id'])
        }
      };
    case Types.CreateObjectivesDone:
      return {
        ...state,
        objectives: {
          ...state.objectives,
          isLoaded: true,
          isLoading: false,
          data: [action.payload, ...state.objectives.data]
        }
      };
    case Types.LoadMilestonesDone:
      return {
        ...state,
        milestones: {
          ...state.milestones,
          isLoaded: true,
          isLoading: false,
          data: _.orderBy(action.payload, ['_id'])
        }
      };
    case Types.CreateMilestoneDone:
      return {
        ...state,
        milestones: {
          ...state.milestones,
          isLoaded: true,
          isLoading: false,
          data: [action.payload, ...state.milestones.data]
        }
      };
    default:
      return state;
  }
}
