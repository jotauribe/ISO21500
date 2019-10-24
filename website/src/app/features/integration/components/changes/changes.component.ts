import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { ActivatedRoute } from '@angular/router';
import {
  UpdateChanges,
  LoadChanges
} from '~/app/core/store/changes/changes.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'gpt-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'changes',
        title: 'Cambios propuestos',
        dataPath: 'changes',
        isList: true,
        schema: {
          title: 'name',
          mainInfo: 'description',
          secondaryInfo: [
            {
              title: 'Estado',
              info: 'status'
            },
            {
              title: 'Documentación Adjunta',
              info: 'attachedDocumentation'
            },
            {
              title: 'Cliente',
              info: 'customer'
            }
          ],
          sections: [
            {
              label: 'Impacto del Cambio',
              data: [
                {
                  title: 'Alcance',
                  info: 'impacts.scope'
                },
                {
                  title: 'Costo',
                  info: 'impacts.costs'
                },
                {
                  title: 'Plazo',
                  info: 'impacts.time'
                },
                {
                  title: 'Otro',
                  info: 'impacts.other'
                }
              ]
            },
            {
              label: 'Comunicación del Estado del Cambio',
              data: [
                {
                  title: 'Nombre de la Persona Notificada',
                  info: 'communication.name'
                },
                {
                  title: 'Rol',
                  info: 'communication.rol'
                },
                {
                  title: 'Fecha',
                  info: 'communication.date'
                }
              ]
            }
          ]
        },
        fields: [
          {
            name: 'name',
            value: '',
            placeholder: 'Nombre de identificación del cambio',
            dataPath: 'name'
          },
          {
            name: 'description',
            value: '',
            placeholder: 'Descripción corta del cambio',
            dataPath: 'description'
          },
          {
            name: 'status',
            value: '',
            placeholder: 'Estado',
            dataPath: 'status'
          },
          {
            name: 'scope',
            value: '',
            placeholder: 'Impacto en Alcance',
            dataPath: 'impacts.scope'
          },
          {
            name: 'costs',
            value: '',
            placeholder: 'Impacto en Costos',
            dataPath: 'impacts.costs'
          },
          {
            name: 'time',
            value: '',
            placeholder: 'Impacto en Plazo',
            dataPath: 'impacts.time'
          },
          {
            name: 'time',
            value: '',
            placeholder: 'Otros Impactos',
            dataPath: 'impacts.other'
          },
          {
            name: 'attachedDocumentation',
            value: '',
            placeholder: 'Documentación Adjunta',
            dataPath: 'attachedDocumentation'
          },
          {
            name: 'customer',
            value: '',
            placeholder: 'Cliente',
            dataPath: 'customer'
          },
          {
            name: 'communication.name',
            value: '',
            placeholder: 'Nombre de la Persona a Notificar',
            dataPath: 'communication.name'
          },
          {
            name: 'rol',
            value: '',
            placeholder: 'Rol de la Persona a Notificar',
            dataPath: 'communication.rol'
          },
          {
            name: 'date',
            value: '',
            placeholder: 'Fecha de la Notificación',
            dataPath: 'communication.date'
          }
        ]
      }
    ]
  };

  data: Observable<any>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {
    this.store.dispatch(new LoadChanges(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.changes.data));
  }

  ngOnInit() {}

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();
    this.store.dispatch(new UpdateChanges({ changes: data, projectId }));
  }
}
