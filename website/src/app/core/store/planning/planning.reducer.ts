import { Types, ActionsUnion } from './planning.actions';
import { PlanningState } from './planning.state';
import * as _ from 'lodash';

export const initialState: PlanningState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function planningReducer(
  state: PlanningState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadPlanningDone:
      return {
        ...state,
        planning: {
          ...state,
          isLoaded: true,
          isLoading: false,
          data: action.payload
        }
      };
    case Types.CreatePlanning:
      return {
        ...state,
        planning: {
          isLoaded: true,
          isLoading: false,
          data: [action.payload, ...state.data]
        }
      };
    default:
      return state;
  }
}
