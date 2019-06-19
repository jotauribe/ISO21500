import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'lodash';
import { FormDialogsService } from '../../services/form-dialogs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gpt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListComponent),
      multi: true
    }
  ]
})
export class ListComponent implements OnInit, ControlValueAccessor {
  @Input()
  itemSchema = {};

  @Input()
  itemFields = {};

  itemsValue = [];

  @Input()
  set items(val) {
    if (!this.isArrayEqual(val, this.itemsValue)) {
      this.itemsValue = val;

      this.onChange(val);
      this.onTouched();
    }
  }

  get items() {
    return this.itemsValue;
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  constructor(
    private forms: FormDialogsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  writeValue(value: any): void {
    if (value) {
      this.itemsValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onEdit(item, index) {
    this.forms
      .openFromJson(this.itemFields)
      .afterClosed()
      .subscribe(result => {
        this.items.splice(index, 1, { ...item, ...result });
        this.items = [...this.items];
      });
  }

  addNewItem(item, index) {
    this.forms
      .openFromJson(this.itemFields)
      .afterClosed()
      .subscribe(result => {
        const newItems = [result, ...this.items];
        this.items = newItems;
      });
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  isArrayEqual = function(x, y) {
    return _(x)
      .xorWith(y, _.isEqual)
      .isEmpty();
  };
}
