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
    <div class="gpt-input {{ noPlaceholder ? 'no-placeholder' : '' }}">
      <input
        [(ngModel)]="value"
        class="gpt-input-element"
        id="{{ id }}"
        placeholder="{{ placeholder }}"
        type="text"
      />
      <label *ngIf="!noPlaceholder" class="gpt-input__label" for="{{ id }}">
        {{ placeholder }}</label
      >
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
  noPlaceholder = false;

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
