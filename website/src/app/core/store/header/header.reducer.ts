import { Types, ActionsUnion } from './header.actions';
import { HeaderState, initialState } from './header.state';

export function headerReducer(
  state: HeaderState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.NewProjectOptionClicked:
      console.log(action);
      return { ...state, createdProjects: ++state.projects };

    default:
      return state;
  }
}
