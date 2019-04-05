import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  @Effect()
  createUser = this.actions.pipe(
    ofType(AuthActions.Types.SignupRequested),
    switchMap((action: AuthActions.SignupRequested) =>
      this.authService.createUser(action.payload).pipe(
        map(data => {
          return new AuthActions.SignupSucceded(data);
        })
      )
    )
  );

  @Effect()
  login = this.actions.pipe(
    ofType(AuthActions.Types.AuthenticationRequested),
    switchMap((action: AuthActions.AuthenticationRequested) =>
      this.authService.login(action.payload).pipe(
        map(data => {
          return new AuthActions.AuthenticationSucceded(data);
        }),
        catchError(error => of(new AuthActions.AuthenticationFailed(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  afterSignup = this.actions.pipe(
    ofType(AuthActions.Types.SignupSucceded),
    tap((action: AuthActions.SignupSucceded) => {
      this.router.navigate(['/projects']);
    })
  );

  @Effect({ dispatch: false })
  afterLogin = this.actions.pipe(
    ofType(AuthActions.Types.AuthenticationSucceded),
    tap((action: AuthActions.SignupSucceded) => {
      this.router.navigate(['/projects']);
    })
  );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
