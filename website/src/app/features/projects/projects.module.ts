import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routes.modules';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
  exports: [ProjectsRoutingModule]
})
export class ProjectsModule {}
