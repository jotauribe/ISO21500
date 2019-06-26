import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from '~/app/shared/components/form-dialog/form-dialog.component';
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
  objectives = [];

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private store: Store<CoreState>
  ) {}

  ngOnInit() {}

  edit(objective, index) {
    const dialogRef = this.dialog.open(FormDialogComponent, {
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
