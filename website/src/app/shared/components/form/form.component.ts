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
  }

  ngOnInit() {
    this.buildFormFromSchema(this.schema);
    this.subscribeToFormChanges();
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
        result.controls[name] = [value];
        result.fields[name] = field;

        return result;
      },
      { controls: {}, fields: {} }
    );
    this.formFields = fields;
    return controls;
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
