import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-textarea',
  template: `
    <div class="gpt-form-group">
      <label class="gpt-form-group__label">{{ label }}</label>
      <textarea
        [(ngModel)]="value"
        cdkTextareaAutosize
        class="gpt-editable__input"
        id="{{ id }}"
        placeholder="{{ !val?.lenght > 0 ? 'Sin Definir' : '' }}"
        type="text"
      ></textarea>
    </div>
  `,
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
