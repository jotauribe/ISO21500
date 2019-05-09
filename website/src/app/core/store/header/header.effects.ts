import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Types as HeaderMenuActionTypes } from './header.actions';
import { NewProjectActions } from '../new-project';

@Injectable()
export class HeaderMenuEffects {
  @Effect()
  openDialog = this.actions.pipe(
    ofType(HeaderMenuActionTypes.NewProjectOptionClicked),
    map(() => new NewProjectActions.OpenDialog())
  );

  constructor(private actions: Actions) {}
}
