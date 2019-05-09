import { Component, OnInit, Input } from '@angular/core';

interface Project {
  id: string;
  title: string;
  status: string;
}

@Component({
  selector: 'gpt-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project;

  constructor() {}

  ngOnInit() {}
}
