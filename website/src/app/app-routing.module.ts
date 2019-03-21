import { ConstitutionComponent } from './features/integration/components/constitution/constitution.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersComponent } from './features/acquisitions/components/providers/providers.component';

const routes: Routes = [
  {
    path: 'projects/:projectId/constitution',
    component: ConstitutionComponent
  },
  { path: 'projects/:projectId/providers', component: ProvidersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
