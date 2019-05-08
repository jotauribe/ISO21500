import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreStoreModule } from './store/index';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewProjectDialogComponent } from './components/new-project-dialog';
import { SharedModule } from '../shared/shared.module';
import { SidebarContainerComponent } from './components/sidebar-container/sidebar-container.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    MenuComponent,
    NewProjectDialogComponent,
    SidebarContainerComponent,
    ProjectDashboardComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreStoreModule,
    SharedModule,
    CoreRoutingModule,
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
