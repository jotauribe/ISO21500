import { Types, ActionsUnion } from './constitution.actions';
import { ConstitutionState } from './constitution.state';

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
      console.log(action);
      return {
        ...state,
        objectives: {
          ...state.objectives,
          isLoaded: true,
          isLoading: false,
          data: action.payload
        }
      };
    default:
      return state;
  }
}
