import { Types, ActionsUnion } from './activities.actions';
import { ActivitiesState } from './activities.state';
import * as _ from 'lodash';

export const initialState: ActivitiesState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function activitiesReducer(
  state: ActivitiesState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadActivitiesDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateActivities:
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
