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

  @Input()
  isFixedLength = false;

  @Input()
  itemEntityName = '';

  itemsValue = [];

  @Input()
  set items(val) {
    this.itemsValue = val;
    this.onChange(val);
    this.onTouched();
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
      .openFromJson(this.itemFields, `Editar ${this.itemEntityName}`)
      .afterClosed()
      .subscribe(result => {
        this.items[index] = { ...this.items[index], ...result };
        this.items = [...this.items.filter(i => i)];
      });
  }

  onRemove(item, index) {
    this.items[index].$wasDeleted = true;
    this.items = [...this.items.filter(i => i)];
  }

  addNewItem(item, index) {
    this.forms
      .openFromJson(this.itemFields, `Crear Nuevo ${this.itemEntityName}`)
      .afterClosed()
      .subscribe(result => {
        const newItems = [result, ...this.items];
        this.items = newItems;
      });
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  getFromItem(item, prop) {
    return _.get(item, prop);
  }
}
