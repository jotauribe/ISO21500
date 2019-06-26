import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProvidersComponent } from './components/providers/providers.component';
import { SharedModule } from '~/app/shared/shared.module';
import { NewProviderComponent } from './components/new-provider/new-provider.component';
import { AcquisitionsComponent } from './acquisitions.component';
import { RouterModule } from '@angular/router';
import { AcquisitionListComponent } from './components/acquisition-list/acquisition-list.component';

@NgModule({
  declarations: [
    ProvidersComponent,
    NewProviderComponent,
    AcquisitionsComponent,
    AcquisitionListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports: [ProvidersComponent],
  entryComponents: [NewProviderComponent]
})
export class AcquisitionsModule {}
