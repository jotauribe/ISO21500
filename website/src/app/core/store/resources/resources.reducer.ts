import { Types, ActionsUnion } from './resources.actions';
import { ResourcesState } from './resources.state';
import * as _ from 'lodash';

export const initialState: ResourcesState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function resourcesReducer(
  state: ResourcesState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadResourcesDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateResources:
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
