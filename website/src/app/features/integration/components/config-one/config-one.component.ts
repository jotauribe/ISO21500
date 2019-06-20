import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { ActivatedRoute } from '@angular/router';
import {
  LoadConfigOne,
  UpdateConfigOne
} from '~/app/core/store/config-one/config-one.actions';

@Component({
  selector: 'gpt-config-one',
  templateUrl: './config-one.component.html',
  styleUrls: ['./config-one.component.scss']
})
export class ConfigOneComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'roles',
        title: 'Roles',
        dataPath: 'roles',
        isList: true,
        schema: {
          title: 'assignedTo',
          prefix: 'name',
          mainInfo: 'responsibilities',
          secondaryInfo: [{ title: 'Nivel de autoridad', info: 'authority' }]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Rol' },
          {
            name: 'assignedTo',
            value: '',
            placeholder: 'Responsable'
          },
          {
            name: 'responsabilities',
            value: '',
            placeholder: 'Responsabilidades del rol'
          },
          {
            name: 'authority',
            value: '',
            placeholder: 'Nivel de autoridad'
          }
        ]
      },
      {
        name: 'documents',
        title: 'Documentos',
        dataPath: 'documents',
        isList: true,
        schema: {
          title: 'name',
          prefix: 'format',
          secondaryInfo: [
            { title: 'Acceso', info: 'access' },
            { title: 'Disponibilidad', info: 'availability' },
            { title: 'Seguridad', info: 'security' },
            { title: 'Recuperacion', info: 'recovery' },
            { title: 'Retencion', info: 'retention' }
          ]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre Documento' },
          {
            name: 'format',
            value: '',
            placeholder: 'Formato'
          },
          {
            name: 'access',
            value: '',
            placeholder: 'Nivel de acceso'
          },
          {
            name: 'availability',
            value: '',
            placeholder: 'Nivel de disponibilidad'
          },
          {
            name: 'security',
            value: '',
            placeholder: 'Nivel de seguridad'
          },
          {
            name: 'retention',
            value: '',
            placeholder: 'Retencion'
          },
          {
            name: 'recovery',
            value: '',
            placeholder: 'Recuperacion'
          }
        ]
      },
      {
        name: 'items',
        title: 'Items de Configuracion',
        dataPath: 'items',
        isList: true,
        schema: {
          title: 'name',
          prefix: 'code',

          secondaryInfo: [
            { title: 'Categoria', info: 'category' },
            { title: 'Fuente', info: 'source' },
            { title: 'format', info: 'Formato' }
          ]
        },
        fields: [
          { name: 'code', value: '', placeholder: 'Codigo' },
          {
            name: 'name',
            value: '',
            placeholder: 'Nombre del item de configuracion'
          },
          {
            name: 'category',
            value: '',
            placeholder: 'Categoria'
          },
          {
            name: 'source',
            value: '',
            placeholder: 'Fuente'
          },
          {
            name: 'format',
            value: '',
            placeholder: 'Formato'
          }
        ]
      }
    ]
  };

  data: Observable<any>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new LoadConfigOne(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.configOne.data));
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();

    this.store.dispatch(new UpdateConfigOne({ configOne: data, projectId }));
  }
}
