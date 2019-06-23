import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { SharedModule } from '~/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { MembersComponent } from './components/members/members.component';
import { TeamManagementComponent } from './components/team-management/team-management.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ResourcesListComponent } from './components/resources-list/resources-list.component';

@NgModule({
  declarations: [
    ResourcesComponent,
    TeamsComponent,
    MembersComponent,
    TeamManagementComponent,
    ActivitiesComponent,
    ResourcesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports: [ResourcesComponent]
})
export class ResourcesModule {}
