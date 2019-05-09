import { ProjectService } from './../../services/api/project.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  map,
  switchMap,
  catchError,
  exhaustMap,
  withLatestFrom,
  tap
} from 'rxjs/operators';
import { of } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import * as NewProjectActions from './new-project.actions';
import { NewProjectDialogComponent } from '../../components/new-project-dialog/new-project-dialog.component';
import { CoreState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { FetchProjects } from '../projects/projects.actions';

@Injectable()
export class NewProjectEffects {
  @Effect()
  createProject = this.actions.pipe(
    ofType(NewProjectActions.Types.CreateProject),
    switchMap((action: NewProjectActions.CreateProject) =>
      this.projectService.create(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => new NewProjectActions.CreateProjectDone(data)),
        // If request fails, dispatch failed action
        catchError(error => of(new NewProjectActions.CreateProjectFail(error)))
      )
    )
  );

  @Effect()
  openDialog = this.actions.pipe(
    ofType(NewProjectActions.Types.OpenDialog),
    exhaustMap(() => of(NewProjectDialogComponent.open(this.dialog))),
    map(
      (dialogRef: MatDialogRef<NewProjectDialogComponent>) =>
        new NewProjectActions.DialogOpened(dialogRef)
    )
  );

  @Effect({ dispatch: false })
  closeDialog = this.actions.pipe(
    ofType(
      NewProjectActions.Types.CreateProjectDone,
      NewProjectActions.Types.CreateProjectFail
    ),
    withLatestFrom(
      this.store.pipe(select(state => state.newProjectDialog.dialogRef))
    ),
    tap(([action, dialogRef]) => dialogRef.close())
  );

  @Effect()
  refreshProjectList = this.actions.pipe(
    ofType(NewProjectActions.Types.CreateProjectDone),
    map(action => new FetchProjects())
  );

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private store: Store<CoreState>,
    private projectService: ProjectService
  ) {}
}
