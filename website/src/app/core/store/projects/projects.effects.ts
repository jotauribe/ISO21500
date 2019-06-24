import { ProjectService } from '../../services/api/project.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of, empty } from 'rxjs';
import * as ProjectsActions from './projects.actions';
import { ROUTER_REQUEST, ROUTER_NAVIGATION } from '@ngrx/router-store';

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

  @Effect()
  fetchActiveProject = this.actions.pipe(
    ofType(ProjectsActions.Types.FetchActiveProject, ROUTER_REQUEST),
    switchMap((action: ProjectsActions.FetchActiveProject) => {
      const urlRegexp = /^\/(projects)\/([a-zA-Z0-9]+)/gi;
      const { url } = action.payload.event;

      if (urlRegexp.test(url)) {
        const projectId = url.split('/')[2];
        return this.projectService.findOne(projectId).pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ProjectsActions.FetchActiveProjectDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error =>
            of(new ProjectsActions.FetchActiveProjectFailure(error))
          )
        );
      } else return empty();
    })
  );

  constructor(
    private actions: Actions,
    private projectService: ProjectService
  ) {}
}
