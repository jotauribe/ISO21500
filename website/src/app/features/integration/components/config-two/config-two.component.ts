import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { ActivatedRoute } from '@angular/router';
import {
  UpdateConfigTwo,
  LoadConfigTwo
} from '~/app/core/store/config-two/config-two.actions';

@Component({
  selector: 'gpt-config-two',
  templateUrl: './config-two.component.html',
  styleUrls: ['./config-two.component.scss']
})
export class ConfigTwoComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'scope',
        title: 'Objetivo y Alcance del Plan',
        dataPath: 'scope',
        isList: false,
        isSingleField: true,
        fields: ['scope']
      },
      {
        name: 'deliverables',
        title: 'Elementos / Entregables Sometidos al Control de Configuración',
        dataPath: 'deliverables',
        isList: true,
        schema: {
          title: 'name',
          mainInfo: 'owner',
          secondaryInfo: [
            {
              title: 'Normas de Identificación y Versionado',
              info: 'versioningRules'
            }
          ]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre de Entregable' },
          {
            name: 'owner',
            value: '',
            placeholder: 'Responsable'
          },
          {
            name: 'versioningRules',
            value: '',
            placeholder: 'Normas de Identificacion y Versionado'
          }
        ]
      },
      {
        name: 'responsibilities',
        title: 'Responsabilidades de Gestión de la Configuración',
        dataPath: 'responsibilities',
        isList: true,
        schema: {
          title: 'role',
          mainInfo: 'functions'
        },
        fields: [
          { name: 'role', value: '', placeholder: 'Rol a desempeñar' },
          {
            name: 'functions',
            value: '',
            placeholder: 'Funciones y Responsabilidades'
          }
        ]
      },
      {
        name: 'documents',
        title: 'Documentos Sometidos al Control de la Configuración',
        dataPath: 'documents',
        isList: true,
        schema: {
          title: 'name',
          mainInfo: 'owner',
          secondaryInfo: [
            {
              title: 'Normas de Identificacion y Versionado',
              info: 'versioningRules'
            }
          ]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre del Documento' },
          {
            name: 'owner',
            value: '',
            placeholder: 'Responsable'
          },
          {
            name: 'versioningRules',
            value: '',
            placeholder: 'Normas de Identificacion y Versionado'
          }
        ]
      }
    ],
    fields: [
      {
        name: 'scope',
        value: '',
        dataPath: 'scope',
        placeholder: 'Objetivo y Alcance del Proyecto',
        isPlain: false,
        isWide: true,
        isUnlabeled: true
      }
    ]
  };

  data: Observable<any>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new LoadConfigTwo(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.configTwo.data));
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();
    this.store.dispatch(new UpdateConfigTwo({ configTwo: data, projectId }));
  }
}
