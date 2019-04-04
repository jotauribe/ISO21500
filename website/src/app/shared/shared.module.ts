import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from './store/store.module';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    StoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [StoreModule, InputComponent, MaterialModule]
})
export class SharedModule {}
