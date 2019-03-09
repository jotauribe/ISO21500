import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from './store/store.module';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, StoreModule, MaterialModule],
  exports: [StoreModule, InputComponent, MaterialModule]
})
export class SharedModule {}
