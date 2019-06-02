import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'gpt-previous-information',
  templateUrl: './previous-information.component.html',
  styleUrls: ['./previous-information.component.scss']
})
export class PreviousInformationComponent implements OnInit {
  @Output()
  onChange = new EventEmitter();

  @Input()
  values;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      client: [''],
      vision: [''],
      viability: [''],
      requirements: [''],
      description: ['']
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(values => this.onChange.emit(values));
  }

  handle;
}
