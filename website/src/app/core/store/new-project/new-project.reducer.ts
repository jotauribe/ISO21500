import { Types, ActionsUnion } from './new-project.actions';
import { NewProjectState } from './new-project.state';

export const initialState: NewProjectState = {
  dialogRef: null
};

export function newProjectReducer(
  state: NewProjectState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.DialogOpened:
      return { ...state, dialogRef: action.payload };
    case Types.CloseDialog:
      return { ...state, dialogRef: null };
    default:
      return state;
  }
}
