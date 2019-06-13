import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormComponent } from '~/app/shared/components/form/form.component';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { SaveObjectives } from '~/app/core/store/constitution/constitution.actions';

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

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private store: Store<CoreState>
  ) {}

  ngOnInit() {}

  edit(objective, index) {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        fields: [
          { name: 'id', value: '', placeholder: 'Codigo' },
          { name: 'name', value: '', placeholder: 'Nombre' },
          { name: 'description', value: '', placeholder: 'Descripcion' },
          {
            name: 'acceptanceCriteria',
            value: '',
            placeholder: 'Metrica / Criterio de aceptacion'
          }
        ]
      }
    });

    const projectId = this.route.snapshot.paramMap.get('projectId');

    dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(
        new SaveObjectives({
          projectId,
          objectiveId: objective._id,
          objective: result
        })
      );
      this.objectives.splice(index, 1, { ...objective, ...result });
    });
  }
}
