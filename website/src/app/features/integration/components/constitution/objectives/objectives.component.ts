import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gpt-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {
  @Input()
  objectives = [
    {
      id: 'OBJ-02',
      name: 'Crear portal empresarial',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitzbreeds of dog from Japan.',
      acceptanceCriteria:
        'The Shiba Inu is the smallest of the six original and distinct spitzbreeds of dog from Japan.',
      approvableBy: ''
    },
    {
      id: 'OBJ-02',
      name: 'Crear portal empresarial',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitzbreeds of dog from Japan.',
      acceptanceCriteria:
        'The Shiba Inu is the smallest of the six original and distinct spitzbreeds of dog from Japan.',
      approvableBy: ''
    }
  ];

  constructor() {}

  ngOnInit() {}
}
