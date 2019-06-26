import { Types, ActionsUnion } from './providers.actions';
import { ProvidersState } from './providers.state';
import * as _ from 'lodash';

export const initialState: ProvidersState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function providersReducer(
  state: ProvidersState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadProvidersDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateProviders:
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
