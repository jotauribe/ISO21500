import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { CoreStoreModule } from './store/index';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewProjectDialogComponent } from './components/new-project-dialog';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    MenuComponent,
    NewProjectDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreStoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    MenuComponent,
    CoreStoreModule
  ],
  entryComponents: [NewProjectDialogComponent]
})
export class CoreModule {}
