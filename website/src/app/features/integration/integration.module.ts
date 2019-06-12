import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { ConstitutionComponent } from './components/constitution/constitution.component';
import { PreviousInformationComponent } from './components/constitution/previous-information/previous-information.component';
import { ObjectivesComponent } from './components/constitution/objectives/objectives.component';

@NgModule({
  declarations: [
    ConstitutionComponent,
    PreviousInformationComponent,
    ObjectivesComponent
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [ConstitutionComponent]
})
export class IntegrationModule {}
