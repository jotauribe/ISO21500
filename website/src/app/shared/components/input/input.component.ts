import { Component, OnInit, Input, HostBinding } from '@angular/core';

let id = 0;

@Component({
  selector: 'gpt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  @HostBinding('attr.placeholder')
  placeholder = '';

  @Input()
  @HostBinding('attr.id')
  id = '';

  constructor() {}

  ngOnInit() {}

  nextId() {
    return id++;
  }
}
