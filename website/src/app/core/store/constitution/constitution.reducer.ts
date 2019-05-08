import { Types, ActionsUnion } from './constitution.actions';
import { ConstitutionState } from './constitution.state';

export const initialState: ConstitutionState = {
  strategicView: 'Without Definition',
  description: 'Without Definition',
  viabilityAnalysis: 'Without Definition',
  generalRequirements: 'Without Definition',
  justification: 'Without Definition'
};

export function constitutionReducer(
  state: ConstitutionState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.SaveInfoDone:
      return { ...state, ...action.payload };
    case Types.LoadInfoDone:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
