import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gpt-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input()
  icon: string;

  @Input()
  title: string;

  constructor() {}

  ngOnInit() {}
}
