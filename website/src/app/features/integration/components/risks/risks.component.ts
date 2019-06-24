import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UpdateRisks, LoadRisks } from '~/app/core/store/risks/risks.actions';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'gpt-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.scss']
})
export class RisksComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'description',
        title: 'Metodologia',
        dataPath: 'description',
        isList: false,
        fields: ['management', 'estimation']
      },
      {
        name: 'probabilityLevels',
        title: 'Niveles de Probabilidad',
        dataPath: 'probabilityLevels',
        isList: false,
        fields: ['almostTrue', 'probable', 'posible', 'unlikely', 'rare']
      },
      {
        name: 'budget',
        title: 'Presupuesto Para la Gestion del Riesgo',
        dataPath: 'budget',
        isList: false,
        isSingleField: true,
        fields: ['budget']
      },
      {
        name: 'protocols',
        title: 'Protocolos',
        dataPath: 'protocols',
        isList: false,
        fields: [
          'contingency',
          'riskControls',
          'riskComunication',
          'riskPlanAuditory'
        ]
      },
      {
        name: 'roles',
        title: 'Distribucion de Roles y Responsabilidades',
        isList: true,
        dataPath: 'roles',
        schema: {
          title: 'task',
          mainInfo: 'description',
          secondaryInfo: [{ title: 'Responsable', info: 'assignedTo' }]
        },
        fields: [
          { name: 'task', value: '', placeholder: 'Tarea' },
          {
            name: 'description',
            value: '',
            placeholder: 'Descripcion'
          },
          {
            name: 'assignedTo',
            value: '',
            placeholder: 'Responsable'
          }
        ]
      },
      {
        name: 'riskAreas',
        title: 'Categorias y Tipos de Riesgos',
        isList: true,
        dataPath: 'riskAreas',
        schema: {
          title: 'area',
          secondaryInfo: [
            { title: 'Tiempo', info: 'time' },
            { title: 'Calidad', info: 'quality' },
            { title: 'Costo', info: 'cost' },
            { title: 'Otros', info: 'others' }
          ]
        },
        fields: [
          { name: 'area', value: '', placeholder: 'Area' },
          {
            name: 'time',
            value: '',
            placeholder: 'Tiempo'
          },
          {
            name: 'quality',
            value: '',
            placeholder: 'Calidad'
          },
          {
            name: 'cost',
            value: '',
            placeholder: 'Costo'
          },
          {
            name: 'others',
            value: '',
            placeholder: 'Otros'
          }
        ]
      },
      {
        name: 'riskCategories',
        title: 'Areas de Tolerancia al Riesgo',
        isList: true,
        dataPath: 'riskCategories',
        schema: {
          title: 'kind',
          secondaryInfo: [{ title: 'Description', info: 'description' }]
        },
        fields: [
          { name: 'kind', value: '', placeholder: 'Tipo de Riesgo' },
          {
            name: 'description',
            value: '',
            placeholder: 'Description'
          }
        ]
      }
    ],
    fields: [
      {
        name: 'management',
        value: '',
        placeholder: 'Descripcion del Proceso de Gestion',
        dataPath: 'description.management'
      },
      {
        name: 'estimation',
        value: '',
        placeholder: 'Identificacion y Estimacion',
        dataPath: 'description.estimation'
      },
      {
        name: 'almostTrue',
        value: '',
        placeholder: 'Casi Cierto',
        dataPath: 'probabilityLevels.almostTrue'
      },
      {
        name: 'probable',
        value: '',
        placeholder: 'Probable',
        dataPath: 'probabilityLevels.probable'
      },
      {
        name: 'posible',
        value: '',
        placeholder: 'Posible',
        dataPath: 'probabilityLevels.posible'
      },
      {
        name: 'unlikely',
        value: '',
        placeholder: 'Poco Probable',
        dataPath: 'probabilityLevels.unlikely'
      },
      {
        name: 'rare',
        value: '',
        placeholder: 'Raro',
        dataPath: 'probabilityLevels.rare'
      },
      {
        name: 'budget',
        value: '',
        dataPath: 'budget',
        isWide: true
      },
      {
        name: 'rare',
        value: '',
        placeholder: 'Raro',
        dataPath: 'probabilityLevels.rare'
      },
      {
        name: 'contingency',
        value: '',
        placeholder: 'Protocolo de Contingencia',
        dataPath: 'protocols.contingency'
      },
      {
        name: 'riskControls',
        value: '',
        placeholder: 'Protocolo de Control de Riesgos',
        dataPath: 'protocols.riskControls'
      },
      {
        name: 'riskComunication',
        value: '',
        placeholder: 'Comunicacion de Riesgos',
        dataPath: 'protocols.riskComunication'
      },
      {
        name: 'riskPlanAuditory',
        value: '',
        placeholder: 'Protocolo de Auditoria de Plan de Riesgos',
        dataPath: 'protocols.riskPlanAuditory'
      }
    ]
  };

  data: Observable<any>;

  isDataLoaded: Observable<boolean>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new LoadRisks(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.risks.data));
    this.isDataLoaded = this.store.pipe(
      select(s => s.risks.isLoaded),
      startWith(false)
    );
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();

    this.store.dispatch(new UpdateRisks({ risks: data, projectId }));
  }
}
