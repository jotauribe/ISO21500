import { Types, ActionsUnion } from './config-one.actions';
import { ConfigOneState } from './config-one.state';
import * as _ from 'lodash';

export const initialState: ConfigOneState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function configOneReducer(
  state: ConfigOneState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadConfigOneDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateConfigOne:
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
