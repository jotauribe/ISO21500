import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableComponent } from './editable.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [EditableComponent, TextareaComponent],
  imports: [CommonModule]
})
export class EditableModule {}
