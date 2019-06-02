import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { InputComponent } from './components/input/input.component';
import { EditableComponent } from './components/editable/editable.component';
import { SectionComponent } from './components/section/section.component';
import { SectionModule } from './components/section/section.module';
import { TitleComponent } from './components/title/title.component';
import { EditableModule } from './components/editable/editable.module';

@NgModule({
  declarations: [InputComponent, TitleComponent],
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
    TitleComponent
  ]
})
export class SharedModule {}
