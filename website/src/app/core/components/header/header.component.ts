import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { HeaderActions } from '../../store/header';
import { CoreState } from '../../store/reducers';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="main-header">
      <div class="main-header__brand">
        <span>GesProTic</span
        ><span class="main-header__brand-dotcom">.com</span>
      </div>
      <div class="main-header__actions">
        <a
          class="main-header__actions__element"
          mat-icon-button
          [matMenuTriggerFor]="createActionMenu.ref"
        >
          <mat-icon>add</mat-icon>
        </a>
        <app-menu
          #createActionMenu
          [options]="menuOptions.create"
          title="Crear"
        >
        </app-menu>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  createProjectEvent = new EventEmitter();

  menuOptions = {
    create: [
      {
        name: 'Crear Proyecto...',
        description:
          'Crear un Proyeco es tu primer paso. Empieza llenando los datos iniciales: mision, vision, etc.',
        action: this.createProject.bind(this)
      }
    ]
  };

  constructor(private store: Store<CoreState>) {}

  ngOnInit() {}

  createProject() {
    this.store.dispatch(new HeaderActions.CreateProject());
  }
}
