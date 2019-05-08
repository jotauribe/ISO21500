import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  Component,
  OnInit,
  forwardRef,
  Input,
  HostBinding
} from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'gpt-editable',
  template: `
    <div
      [ngClass]="{
        'gpt-form-group': true,
        'gpt-form-group--inline': type === 'input'
      }"
      class="gpt-form-group"
    >
      <label
        *ngIf="label"
        [ngClass]="{
          'gpt-form-group__label': true,
          'gpt-form-group__label--inline': type === 'input'
        }"
        >{{ label }}</label
      >
      <textarea
        [(ngModel)]="value"
        cdkTextareaAutosize
        [ngClass]="{
          'gpt-editable__input': type === 'input',
          'gpt-editable__textarea': type === 'textarea'
        }"
        id="{{ id }}"
        placeholder="{{ !val?.lenght > 0 ? 'Sin Definir' : '' }}"
        type="text"
      ></textarea>
    </div>
  `,
  styleUrls: ['./editable.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditableComponent),
      multi: true
    }
  ]
})
export class EditableComponent implements ControlValueAccessor, OnInit {
  @Input()
  @HostBinding('attr.id')
  id = `gpt-input_${nextUniqueId++}`;

  @Input()
  label: string;

  @Input()
  type: 'input' | 'textarea' = 'input';

  val: any;

  @Input('value')
  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  get value() {
    return this.val;
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {}

  writeValue(value: any): void {
    if (value) {
      this.val = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
