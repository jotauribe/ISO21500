import { AuthRoutingModule } from './authentication-routes.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login';
import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthenticationComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  exports: [LoginComponent]
})
export class AuthenticationModule {}
