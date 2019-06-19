import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'gpt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input()
  schema: any = {};

  @Input()
  data: any = {};

  @Output()
  onChanges = new EventEmitter();

  form: FormGroup;
  formFields: Object;
  sections: any = { items: {} };

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.sections = this.extractItems();

    if (this.form) this.initForm(changes.data.currentValue);
  }

  ngOnInit() {
    this.buildFormFromSchema(this.schema);
    this.subscribeToFormChanges();
  }

  initForm(data) {
    const vals = {};

    _.forOwn(this.formFields, (value: any, key) => {
      _.set(vals, value.name, _.get(data, value.dataPath));
    });

    this.form.patchValue(vals);
  }

  buildFormFromSchema(schema) {
    const { fields } = schema;
    const formStructure = this.createFormStructure(fields);
    this.form = this.fb.group(formStructure);
  }

  createFormStructure(fieldSchemas) {
    const { controls, fields } = _.reduce(
      fieldSchemas,
      (result, field) => {
        const { name, value = '' } = field;
        const fieldValue = this.getFieldValue(field, this.data);
        result.controls[name] = [fieldValue];
        result.fields[name] = field;

        return result;
      },
      { controls: {}, fields: {} }
    );
    this.formFields = fields;
    return controls;
  }

  getFieldValue(field, data) {
    const valueFromData = _.get(data, field.dataPath);
    if (valueFromData) return valueFromData;
    return field.value;
  }

  subscribeToFormChanges() {
    this.form.valueChanges.subscribe(values => {
      this.onChanges.emit(values);
    });
  }

  getPlaceholderFor(section, fieldName) {
    const { placeholder } = this.formFields[fieldName];

    return placeholder;
  }

  extractItems() {
    const { sections } = this.schema;
    return _.reduce(
      sections,
      (items, section) => {
        if (section.isList) {
          const data = _.get(this.data, section.dataPath);
          items[section.name] = this.getItems(section, data);
        }
        return items;
      },
      {}
    );
  }

  getItems(section, data) {
    if (Array.isArray(data)) return data;

    const { titles } = section.schema;
    return _.reduce(
      data,
      (itemList, item, itemName) => {
        itemList.push({ ...item, title: titles[itemName] });
        return itemList;
      },
      []
    );
  }
}
