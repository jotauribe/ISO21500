import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComponentType } from '@angular/core/src/render3';
import { FormDialogComponent } from '../components/form-dialog/form-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FormDialogsService {
  constructor(private dialog: MatDialog) {}

  open(conponentOrTemplateRef: ComponentType<unknown> | TemplateRef<unknown>) {
    return this.dialog.open(conponentOrTemplateRef, {
      panelClass: 'new-project-dialog-container'
    });
  }

  openObjectivesForm(title = 'Editar Objetivo') {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        fields: [
          { name: 'id', value: '', placeholder: 'Código' },
          { name: 'name', value: '', placeholder: 'Nombre' },
          { name: 'description', value: '', placeholder: 'Descripción' },
          {
            name: 'acceptanceCriteria',
            value: '',
            placeholder: 'Métrica / Criterio de aceptación'
          }
        ],
        title
      }
    });

    return dialogRef;
  }

  openPhasesForm(title = 'Editar Fase') {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          { name: 'description', value: '', placeholder: 'Descripción' },
          {
            name: 'milestone',
            value: '',
            placeholder: 'Hito',
            type: 'select',
            optionsId: 'milestones'
          },
          { name: 'date', value: '', placeholder: 'Fecha' }
        ],
        title
      }
    });

    return dialogRef;
  }

  openMilestonesForm(title = 'Editar Hito') {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          { name: 'description', value: '', placeholder: 'Descripción' },
          { name: 'deliverable', value: '', placeholder: 'Entregable' },
          { name: 'date', value: '', placeholder: 'Fecha' }
        ],
        title
      }
    });

    return dialogRef;
  }

  openFromJson(fields, title = 'Formulario') {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: { fields, title }
    });

    return dialogRef;
  }
}
