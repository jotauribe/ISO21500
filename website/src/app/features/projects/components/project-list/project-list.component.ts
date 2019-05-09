import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { FetchProjects } from '~/app/core/store/projects/projects.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'gpt-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Observable<any>;

  constructor(private store: Store<CoreState>) {
    this.store.dispatch(new FetchProjects());
    this.projects = this.store.select(state => state.projects.projects);
  }

  ngOnInit() {}

  trackProjectsBy(index, item) {
    if (!item) return null;
    return item.id;
  }
}
