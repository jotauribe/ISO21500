import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CoreState } from 'src/app/core/store/reducers';
import { AuthenticationRequested } from 'src/app/core/store/auth/auth.actions';

@Component({
  selector: 'gpt-login-form',
  template: `
    <div class="container">
      <form
        class="login-form mat-elevation-z4"
        [formGroup]="loginForm"
        (ngSubmit)="login()"
      >
        <h2 class="login-form__title">Inicia Sesion</h2>
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
          <button type="submit" color="primary" mat-raised-button>
            Ingresar
          </button>
        </div>
        <p class="login-form__footer">
          Aun no estas registrado?
          <a href="/signup" mat-button>Registrate</a>
        </p>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CoreState>
  ) {
    this.loginForm = this.formBuilder.group({
      username: [],
      password: []
    });
  }

  ngOnInit() {}

  login() {
    this.store.dispatch(new AuthenticationRequested(this.loginForm.value));
  }
}
