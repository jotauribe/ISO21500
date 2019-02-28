import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    MenuComponent
  ],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    MenuComponent,
    MaterialModule
  ]
})
export class CoreModule {}
