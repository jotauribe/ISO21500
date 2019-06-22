import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  navLinks = [
    { path: ['teams'], label: 'Equipo' },
    { path: ['members'], label: 'Miembros' },
    { path: ['team_management'], label: 'Administracion de Equipos' },
    { path: ['team_activities'], label: 'Actividades' },
    { path: ['resources'], label: 'Recursos' }
  ];

  constructor() {}

  ngOnInit() {}
}
