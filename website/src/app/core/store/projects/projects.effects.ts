import { ProjectService } from '../../services/api/project.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ProjectsActions from './projects.actions';

@Injectable()
export class ProjectsEffects {
  @Effect()
  fetchProjects = this.actions.pipe(
    ofType(ProjectsActions.Types.FetchProjects),
    switchMap((action: ProjectsActions.FetchProjects) =>
      this.projectService.find().pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ProjectsActions.FetchProjectsDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ProjectsActions.FetchProjectsFailure(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private projectService: ProjectService
  ) {}
}
