import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'gpt-project-dashboard',
  template: `
    <gpt-sidebar-container>
      <app-sidebar sidebar></app-sidebar>
      <div class="content" content>
        <h2 class="project-title">{{ projectTitle | async }}</h2>
        <router-outlet></router-outlet>
      </div>
    </gpt-sidebar-container>
  `,
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {
  projectTitle: Observable<string>;

  constructor(private store: Store<CoreState>) {
    this.projectTitle = store.pipe(select(s => s.projects.activeProject.title));
  }

  ngOnInit() {}
}
