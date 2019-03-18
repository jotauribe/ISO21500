import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from './store/store.module';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, StoreModule, MaterialModule, FormsModule],
  exports: [StoreModule, InputComponent, MaterialModule]
})
export class SharedModule {}
