import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'gpt-input',
  template: `
    <div class="gpt-input {{ noPlaceholder ? 'no-placeholder' : '' }}">
      <input
        #input
        [value]="val"
        (input)="pushChanges($event.target.value)"
        (blur)="onTouched($event)"
        (change)="handleFile($event.target.files)"
        class="gpt-input-element"
        id="{{ id }}"
        placeholder="{{ placeholder }}"
        [type]="type"
      />
      <label *ngIf="!noPlaceholder" class="gpt-input__label" for="{{ id }}">
        {{ placeholder }}
      </label>
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
  @ViewChild('input')
  input: ElementRef;

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
    if (this.type !== 'file') {
      this.val = val;
      this.onChange(val);
    } else {
      this.val = val.file;
      this.onChange(this.fileToUpload);
    }
    this.onTouched();
  }

  get value() {
    return this.val;
  }

  fileToUpload: Blob;

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

  handleFile(files) {
    if (this.type === 'file') {
      const fileReader = new FileReader();

      fileReader.onloadend = event => {
        this.fileToUpload = new File([fileReader.result], files[0].name);
        this.onChange({
          file: fileReader.result,
          name: files[0].name,
          notLoaded: true
        });
      };

      fileReader.readAsDataURL(files[0]);
    }
  }

  openFileChooser() {
    this.input.nativeElement.click();
  }
}
