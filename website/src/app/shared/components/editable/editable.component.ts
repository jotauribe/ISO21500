import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  Component,
  OnInit,
  forwardRef,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { filter, take, switchMapTo, skip } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

let nextUniqueId = 0;

@Component({
  selector: 'gpt-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditableComponent),
      multi: true
    }
  ]
})
export class EditableComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  @Input()
  @HostBinding('attr.id')
  id = `gpt-input_${nextUniqueId++}`;

  @Input()
  label: string;

  @Input()
  emptyMessage: string = 'Agrega una definición';

  @Input()
  raised: boolean = true;

  @Input()
  minLines: number = 12;

  @Input()
  maxLines: number = 20;

  @Input()
  showActions: boolean = true;

  inEditMode: boolean = false;

  @Input()
  showEmptyMessage: boolean = true;

  @ViewChild('textarea')
  textarea: ElementRef;

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

  editorValue: string = this.val;
  previousValue: string = this.val;

  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  onChange: any = () => {};

  onTouched: any = () => {};

  constructor(private host: ElementRef) {}

  private get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    this.editModeHandler();
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

  toEditMode(event): void {
    this.showEmptyMessage = false;
    this.inEditMode = true;
    this.textarea.nativeElement.focus();
    this.previousValue = this.val;
    this.editMode.next(true);
  }

  save(event): void {
    this.value = this.textarea.nativeElement.value;
    this.inEditMode = false;
  }

  cancel(event): void {
    this.inEditMode = false;
    this.editorValue = this.val;
  }

  toViewMode() {
    this.showEmptyMessage = true;
    this.inEditMode = false;
  }

  private editModeHandler() {
    const clickOutside$ = fromEvent(document, 'click').pipe(
      skip(1),
      filter(({ target }) => this.element.contains(target) === false),
      take(1)
    );

    this.editMode$
      .pipe(
        switchMapTo(clickOutside$),
        untilDestroyed(this)
      )
      .subscribe(event => {
        this.toViewMode();
      });
  }
}
