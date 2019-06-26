import { Types, ActionsUnion } from './members.actions';
import { MembersState } from './members.state';
import * as _ from 'lodash';

export const initialState: MembersState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function membersReducer(
  state: MembersState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadMembersDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateMembers:
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
