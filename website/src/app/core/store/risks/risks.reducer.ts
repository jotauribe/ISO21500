import { Types, ActionsUnion } from './risks.actions';
import { RisksState } from './risks.state';
import * as _ from 'lodash';

export const initialState: RisksState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function risksReducer(
  state: RisksState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadRisksDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateRisks:
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
