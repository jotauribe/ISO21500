import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routes.modules';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
  exports: [ProjectsRoutingModule]
})
export class ProjectsModule {}
