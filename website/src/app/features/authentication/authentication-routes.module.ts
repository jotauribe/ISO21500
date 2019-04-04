import { AuthenticationComponent } from '@authentication/authentication.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [{ path: 'login', pathMatch: 'full', component: LoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
