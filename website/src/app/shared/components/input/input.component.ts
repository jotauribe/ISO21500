import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewChild,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'gpt-input',
  template: `
    <div class="gpt-input">
      <input
        [(ngModel)]="value"
        class="gpt-input-element"
        id="{{ id }}"
        placeholder="{{ placeholder }}"
        type="text"
      />
      <label class="gpt-input__label" for="id10905"> {{ placeholder }}</label>
    </div>
  `,
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input()
  @HostBinding('attr.placeholder')
  placeholder = '';

  @Input()
  @HostBinding('attr.id')
  id = `gpt-input_${nextUniqueId++}`;

  @ViewChild('input')
  input;

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
    if (!value) {
      console.log('Hola bebe 222');
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
