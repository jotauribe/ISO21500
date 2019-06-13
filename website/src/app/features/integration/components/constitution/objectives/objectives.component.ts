import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormComponent } from '~/app/shared/components/form/form.component';

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

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  edit(objective) {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        fields: [
          { name: 'code', value: '', placeholder: 'Codigo' },
          { name: 'description', value: '', placeholder: 'Descripcion' },
          {
            name: 'acceptanceCriteria',
            value: '',
            placeholder: 'Metrica / Criterio de aceptacion'
          }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
