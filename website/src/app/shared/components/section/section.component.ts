import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'gpt-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input()
  title: string;

  @HostBinding()
  class: string;

  constructor() {}

  ngOnInit() {}
}
