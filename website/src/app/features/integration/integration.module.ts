import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { ConstitutionComponent } from './components/constitution/constitution.component';
import { PreviousInformationComponent } from './components/constitution/previous-information/previous-information.component';
import { ObjectivesComponent } from './components/constitution/objectives/objectives.component';
import { MilestonesComponent } from './components/constitution/milestones/milestones.component';
import { PhasesComponent } from './components/constitution/phases/phases.component';
import { IntegrationComponent } from './integration.component';
import { RouterModule } from '@angular/router';
import { PlanningComponent } from './components/planning/planning.component';
import { ConfigOneComponent } from './components/config-one/config-one.component';

@NgModule({
  declarations: [
    ConstitutionComponent,
    PreviousInformationComponent,
    ObjectivesComponent,
    MilestonesComponent,
    PhasesComponent,
    IntegrationComponent,
    PlanningComponent,
    ConfigOneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports: [ConstitutionComponent, IntegrationComponent]
})
export class IntegrationModule {}
