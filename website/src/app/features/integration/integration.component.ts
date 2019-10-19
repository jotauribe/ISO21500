import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {
  navLinks = [
    { path: ['constitution'], label: 'Constitución' },
    { path: ['planning'], label: 'Planeación' },
    { path: ['configone'], label: 'Configuración 1' },
    { path: ['configtwo'], label: 'Configuración 2' },
    { path: ['risks'], label: 'Riesgos' },
    { path: ['changes'], label: 'Cambios' },
    { path: ['lessons'], label: 'Lecciones Aprendidas' }
  ];

  constructor() {}

  ngOnInit() {}
}
