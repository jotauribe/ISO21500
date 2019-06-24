import { Types, ActionsUnion } from './acquisitions.actions';
import { AcquisitionsState } from './acquisitions.state';
import * as _ from 'lodash';

export const initialState: AcquisitionsState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function acquisitionsReducer(
  state: AcquisitionsState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadAcquisitionsDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateAcquisitions:
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
