import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ConstitutionComponent } from '../features/integration/components/constitution/constitution.component';
import { ProvidersComponent } from '../features/acquisitions/components/providers/providers.component';
import { GuardsService } from './guards.service';

const routes: Routes = [
  {
    path: 'projects/:projectId',
    component: ProjectDashboardComponent,
    canActivate: [GuardsService],
    children: [
      {
        path: '',
        redirectTo: 'constitution',
        pathMatch: 'full'
      },
      {
        path: 'constitution',
        component: ConstitutionComponent,
        pathMatch: 'full'
      },
      {
        path: 'providers',
        component: ProvidersComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
