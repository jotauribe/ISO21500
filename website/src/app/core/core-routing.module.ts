import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectDashboardComponent,
  }
];

@NgModule({
  imports: [],
  exports: []
})
export class CoreRoutingModule {}
