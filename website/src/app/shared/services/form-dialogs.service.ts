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

  openObjectivesForm() {
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

    return dialogRef;
  }

  openPhasesForm() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          { name: 'description', value: '', placeholder: 'Descripcion' },
          { name: 'milestone', value: '', placeholder: 'Hito' },
          { name: 'date', value: '', placeholder: 'Fecha' }
        ]
      }
    });

    return dialogRef;
  }

  openMilestonesForm() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          { name: 'description', value: '', placeholder: 'Descripcion' },
          { name: 'deliverable', value: '', placeholder: 'Entregable' },
          { name: 'date', value: '', placeholder: 'Fecha' }
        ]
      }
    });

    return dialogRef;
  }

  openFromJson(fields) {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: { fields }
    });

    return dialogRef;
  }
}
