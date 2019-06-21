import { Types, ActionsUnion } from './lessons.actions';
import { LessonsState } from './lessons.state';
import * as _ from 'lodash';

export const initialState: LessonsState = {
  isLoaded: false,
  isLoading: false,
  data: {}
};

export function lessonsReducer(
  state: LessonsState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.LoadLessonsDone:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload
      };
    case Types.CreateLessons:
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
