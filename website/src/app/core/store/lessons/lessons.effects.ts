import { ConstitutionService } from '../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as LessonsActions from './lessons.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';
import { LessonsService } from '../../services/lessons.service';

@Injectable()
export class LessonsEffects {
  @Effect()
  updateLessons = this.actions.pipe(
    ofType(LessonsActions.Types.UpdateLessons),
    withLatestFrom(this.store.pipe(select(s => s.lessons))),
    switchMap(([action, { data }]: [LessonsActions.UpdateLessons, any]) =>
      this.lessonsService
        .updateLessons({ ...action.payload, lessonsId: data._id })
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new LessonsActions.UpdateLessonsDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error => of(new LessonsActions.UpdateLessonsFail(error)))
        )
    )
  );

  @Effect()
  fetchLessons = this.actions.pipe(
    ofType(LessonsActions.Types.LoadLessons),
    switchMap((action: LessonsActions.LoadLessons) =>
      this.lessonsService.fetchLessons(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new LessonsActions.LoadLessonsDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new LessonsActions.LoadLessonsFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private lessonsService: LessonsService,
    private store: Store<CoreState>
  ) {}
}
