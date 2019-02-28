import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
          'Crear un Proyeco es tu primer paso. Empieza llenando los datos iniciales: mision, vision, etc.'
      },
      {
        name: 'Crear Objetivo',
        description: 'Un Objetivo define una meta a alcanzar en el proyecto.'
      }
    ]
  };

  @Output()
  createProjectEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
