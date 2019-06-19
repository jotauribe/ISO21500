import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { InputComponent } from './components/input/input.component';
import { SectionModule } from './components/section/section.module';
import { TitleComponent } from './components/title/title.component';
import { EditableModule } from './components/editable/editable.module';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    InputComponent,
    TitleComponent,
    FormDialogComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SectionModule,
    EditableModule,
    MaterialModule
  ],
  exports: [
    InputComponent,
    EditableModule,
    MaterialModule,
    SectionModule,
    TitleComponent,
    FormDialogComponent,
    FormComponent
  ],
  entryComponents: [FormDialogComponent]
})
export class SharedModule {}
