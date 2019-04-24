import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

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
  redirection = this.actions.pipe(
    ofType(
      AuthActions.Types.SignupSucceded,
      AuthActions.Types.AuthenticationSucceded
    ),
    tap((action: AuthActions.SignupSucceded) => {
      this.router.navigate(['/projects']);
    })
  );

  @Effect({ dispatch: false })
  onLoginError = this.actions.pipe(
    ofType(
      AuthActions.Types.SignupFailed,
      AuthActions.Types.AuthenticationFailed
    ),
    tap((action: AuthActions.AuthenticationFailed) => {
      this.snackbar.open('Error de Autenticacion');
    })
  );

  @Effect({ dispatch: false })
  onSignupFormValidationError = this.actions.pipe(
    ofType(
      AuthActions.Types.SignupFormValidationFailed
    ),
    tap((action: AuthActions.AuthenticationFailed) => {
      this.snackbar.open('Los campos marcados con * son requeridos');
    })
  );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}
}
