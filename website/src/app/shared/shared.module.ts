import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { InputComponent } from './components/input/input.component';
import { SectionModule } from './components/section/section.module';
import { TitleComponent } from './components/title/title.component';
import { EditableModule } from './components/editable/editable.module';
import { FormComponent } from './components/form-dialog/form-dialog.component';

@NgModule({
  declarations: [InputComponent, TitleComponent, FormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SectionModule,
    EditableModule
  ],
  exports: [
    InputComponent,
    EditableModule,
    MaterialModule,
    SectionModule,
    TitleComponent,
    FormComponent
  ],
  entryComponents: [FormComponent]
})
export class SharedModule {}
