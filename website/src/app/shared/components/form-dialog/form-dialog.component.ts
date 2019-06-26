import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'gpt-dialog-form',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  form: FormGroup;

  title: string = 'Formulario';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: { fields: any; title: string; actions?: any }
  ) {
    const { fields, title } = this.data;
    const formControls = this.createControlsSchema(fields);
    this.form = this.fb.group(formControls);
    this.title = title;
  }

  ngOnInit() {}

  submit() {
    const { fields } = this.data;
    const formValues = _.reduce(
      fields,
      (result, field, key) => {
        const value = this.form.controls[field.name].value;
        _.set(result, field.dataPath || field.name, value);
        return result;
      },
      {}
    );

    this.dialogRef.close(formValues);
  }

  createControlsSchema(fields) {
    const controlsSchema = _.reduce(
      fields,
      (result, { name, value = '' }) => {
        result[name] = [value];
        return result;
      },
      {}
    );

    return controlsSchema;
  }
}
