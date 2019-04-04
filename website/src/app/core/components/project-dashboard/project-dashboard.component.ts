import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-project-dashboard',
  template: `
    <gpt-sidebar-container>
      <app-sidebar sidebar></app-sidebar>
      
    </gpt-sidebar-container>
  `,
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
