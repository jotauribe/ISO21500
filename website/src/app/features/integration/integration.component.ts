import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {
  navLinks = [
    { path: ['constitution'], label: 'Constitucion' },
    { path: ['planning'], label: 'Planeacion' },
    { path: ['configone'], label: 'Configuracion 1' },
    { path: ['configtwo'], label: 'Configuracion 2' },
    { path: ['risks'], label: 'Riesgos' },
    { path: ['changes'], label: 'Cambios' },
    { path: ['lessons'], label: 'Lecciones Aprendidas' }
  ];

  constructor() {}

  ngOnInit() {}
}
