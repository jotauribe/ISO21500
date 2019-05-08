import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { InputComponent } from './components/input/input.component';
import { EditableComponent } from './components/editable/editable.component';

@NgModule({
  declarations: [InputComponent, EditableComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, EditableComponent, MaterialModule]
})
export class SharedModule {}
