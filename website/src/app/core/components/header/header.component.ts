import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { HeaderActions } from '../../store/header';
import { CoreState } from '../../store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOptions = {
    create: [
      {
        name: 'Crear Proyecto...',
        description:
          'Crear un Proyeco es tu primer paso. Empieza llenando los datos iniciales: mision, vision, etc.',
        action: this.dispatch.bind(this)
      },
      {
        name: 'Crear Objetivo',
        description: 'Un Objetivo define una meta a alcanzar en el proyecto.',
        action: this.dispatch.bind(this)
      }
    ]
  };

  @Output()
  createProjectEvent = new EventEmitter();

  constructor(private store: Store<CoreState>) {
    console.log('Hola: ', this.store);
  }

  ngOnInit() {
    this.dispatch();
  }

  dispatch() {
    this.store.dispatch(new HeaderActions.CreateProject());
  }
}
