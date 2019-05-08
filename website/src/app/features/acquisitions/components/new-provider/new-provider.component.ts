import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.scss']
})
export class NewProviderComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: [null],
      name: [null],
      address: [null],
      tel: [null]
    });
  }

  ngOnInit() {}
}
