import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CoreState } from 'src/app/core/store/reducers';
import {
  SignupFormSubmitted,
  SignupRequested,
  SignupFormValidationFailed
} from 'src/app/core/store/auth/auth.actions';

@Component({
  selector: 'gpt-signup',
  template: `
    <div class="container">
      <form
        class="signup-form mat-elevation-z4"
        [formGroup]="signupForm"
        (ngSubmit)="signup()"
      >
        <h2 class="signup-form__title">Regístrate</h2>
        <div class="inline-input-group">
          <gpt-input
            formControlName="firstname"
            class="signup-form__input"
            placeholder="Nombre *"
          ></gpt-input>
          <gpt-input
            formControlName="lastname"
            class="signup-form__input"
            placeholder="Apellido *"
          ></gpt-input>
        </div>
        <gpt-input
          formControlName="email"
          class="signup-form__input"
          placeholder="Email *"
          type="email"
        ></gpt-input>
        <gpt-input
          formControlName="username"
          class="signup-form__input"
          placeholder="Nombre de usuario *"
          type="text"
        ></gpt-input>

        <div class="inline-input-group">
          <gpt-input
            formControlName="password"
            class="signup-form__input"
            placeholder="Contraseña *"
            type="password"
          ></gpt-input>
          <gpt-input
            class="signup-form__input"
            placeholder="Confirmar contraseña *"
            type="password"
          ></gpt-input>
        </div>

        <div class="signup-form__actions">
          <button color="primary" mat-raised-button type="submit">
            Aceptar
          </button>
        </div>
        <p class="signup-form__footer">
          ¿Ya tienes una cuenta?
          <a href="/login" mat-button>Inicia sesión</a>
        </p>
      </form>
    </div>
  `,
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CoreState>
  ) {
    this.signupForm = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  signup() {
    if (this.signupForm.valid) {
      this.store.dispatch(new SignupRequested(this.signupForm.value));
    } else {
      this.store.dispatch(
        new SignupFormValidationFailed(this.getInvalidFields())
      );
    }
  }

  getInvalidFields() {
    const { controls } = this.signupForm;
    return Object.keys(controls).filter(key => controls[key].invalid);
  }
}
