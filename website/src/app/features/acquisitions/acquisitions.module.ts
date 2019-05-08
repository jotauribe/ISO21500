import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './components/providers/providers.component';
import { SharedModule } from '~/app/shared/shared.module';
import { NewProviderComponent } from './components/new-provider/new-provider.component';

@NgModule({
  declarations: [ProvidersComponent, NewProviderComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [ProvidersComponent],
  entryComponents: [NewProviderComponent]
})
export class AcquisitionsModule {}
