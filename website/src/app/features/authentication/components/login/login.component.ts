import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { CoreState } from 'src/app/core/store/reducers';
import { AuthenticationRequested } from 'src/app/core/store/auth/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'gpt-login-form',
  template: `
    <div class="container">
      <form
        class="login-form mat-elevation-z4"
        [formGroup]="loginForm"
        (ngSubmit)="login()"
      >
        <h2 class="login-form__title">Inicia Sesión</h2>
        <gpt-input
          formControlName="username"
          class="login-form__input"
          placeholder="Usuario"
        ></gpt-input>
        <gpt-input
          formControlName="password"
          class="login-form__input"
          placeholder="Contraseña"
          type="password"
        ></gpt-input>
        <div class="login-form__actions">
          <button
            class="login-form__submit-button"
            type="submit"
            color="primary"
            mat-raised-button
          >
            <span *ngIf="!(isAuthInProgress | async)">Ingresar</span>
            <mat-spinner
              *ngIf="(isAuthInProgress | async)"
              diameter="24"
              class="progress"
              color="accent"
              mode="indeterminate"
              value="75"
            >
            </mat-spinner>
          </button>
        </div>
        <p class="login-form__footer">
          ¿Aún no estas registrado?
          <a href="/signup" mat-button>Regístrate</a>
        </p>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAuthInProgress: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CoreState>
  ) {
    this.loginForm = this.formBuilder.group({
      username: [],
      password: []
    });

    this.isAuthInProgress = this.store.pipe(
      select(state => state.auth.isAuthInProgress)
    );
  }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new AuthenticationRequested(this.loginForm.value));
  }
}
