import { Types, ActionsUnion } from './config-two.actions';
import { ConfigTwoState } from './config-two.state';
import * as _ from 'lodash';

export const initialState: ConfigTwoState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function configTwoReducer(
  state: ConfigTwoState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadConfigTwoDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateConfigTwo:
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
