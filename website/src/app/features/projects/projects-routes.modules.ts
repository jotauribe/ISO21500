import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { GuardsService } from '~/app/core/guards.service';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [GuardsService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
