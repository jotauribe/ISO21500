import { ProjectService } from './../../services/api/project.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material';
import * as NewProjectActions from './new-project.actions';

@Injectable()
export class NewProjectEffects {
  @Effect()
  openDialog = this.actions.pipe(
    ofType(NewProjectActions.Types.CreateProject),
    switchMap((action: NewProjectActions.CreateProject) =>
      this.projectService.create(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new NewProjectActions.CreateProjectDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new NewProjectActions.CreateProjectFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private router: Router,
    private location: Location,
    private projectService: ProjectService
  ) {}
}
