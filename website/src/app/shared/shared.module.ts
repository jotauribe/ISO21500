import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from './store/store.module';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from './modules/material.module';
import { EditableComponent } from './components/editable/editable.component';

@NgModule({
  declarations: [InputComponent, EditableComponent],
  imports: [CommonModule, StoreModule, MaterialModule, FormsModule],
  exports: [StoreModule, InputComponent, MaterialModule, EditableComponent]
})
export class SharedModule {}
