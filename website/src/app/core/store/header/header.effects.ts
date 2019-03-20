import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Types as HeaderMenuActionTypes } from './header.actions';
import { NewProjectActions } from '../new-project';
import { NewProjectDialogComponent } from '../../components/new-project-dialog';

@Injectable()
export class HeaderMenuEffects {
  @Effect()
  openDialog = this.actions.pipe(
    ofType(HeaderMenuActionTypes.NewProjectOptionClicked),
    exhaustMap(() => {
      const dialogRef = NewProjectDialogComponent.open(this.dialog);
      return dialogRef.afterClosed();
    }),
    map((result: any) => {
      if (result === undefined) {
        return new NewProjectActions.CloseDialog();
      }
      return new NewProjectActions.CloseDialog();
    })
  );

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private router: Router,
    private location: Location
  ) {}
}
