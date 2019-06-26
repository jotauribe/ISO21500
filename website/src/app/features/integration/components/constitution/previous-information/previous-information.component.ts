import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'gpt-previous-information',
  templateUrl: './previous-information.component.html',
  styleUrls: ['./previous-information.component.scss']
})
export class PreviousInformationComponent implements OnInit {
  @Output()
  onChanges = new EventEmitter();

  formValues: any = {};

  that = this;

  @Input()
  set values(vals) {
    if (vals && !_.isEqual(vals, this.formValues)) {
      this.form.patchValue(vals);
    }
    this.formValues = { ...vals };
  }

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      client: [this.formValues.client || ''],
      vision: [this.formValues.vision || ''],
      viability: [this.formValues.viability || ''],
      requirements: [this.formValues.requirements || ''],
      description: [this.formValues.description || '']
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(values => {
      this.onChanges.emit(values);
    });
  }
}
