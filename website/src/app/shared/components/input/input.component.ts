import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'gpt-input',
  template: `
    <div class="gpt-input {{ noPlaceholder ? 'no-placeholder' : '' }}">
      <input
        [value]="val"
        (input)="pushChanges($event.target.value)"
        (blur)="onTouched($event)"
        class="gpt-input-element"
        id="{{ id }}"
        placeholder="{{ placeholder }}"
        [type]="type"
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
  placeholder = '';

  @Input()
  noPlaceholder = false;

  @Input()
  type = 'text';

  @Input()
  id = `gpt-input_${nextUniqueId++}`;

  val: any = '';

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

  pushChanges(value: any) {
    this.onChange(value);
  }

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
