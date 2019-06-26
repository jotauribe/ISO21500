import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableComponent } from './editable.component';
import { ActionsComponent } from './actions/actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';

@NgModule({
  declarations: [EditableComponent, ActionsComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MaterialModule],
  exports: [EditableComponent, ActionsComponent]
})
export class EditableModule {}
