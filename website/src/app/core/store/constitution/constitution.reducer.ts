import { Types, ActionsUnion } from "./constitution.actions";
import { ConstitutionState } from "./constitution.state";

export const initialState: ConstitutionState = {
  previousInformation: {
    isLoaded: false,
    isLoading: false,
    data: null
  }
};

export function constitutionReducer(
  state: ConstitutionState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.SavePrevInfoDone:
      return { ...state, previousInformation: action.payload };
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
    default:
      return state;
  }
}
