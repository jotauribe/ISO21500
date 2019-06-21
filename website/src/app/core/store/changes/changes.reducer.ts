import { Types, ActionsUnion } from './changes.actions';
import { ChangesState } from './changes.state';
import * as _ from 'lodash';

export const initialState: ChangesState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function changesReducer(
  state: ChangesState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadChangesDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateChanges:
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
