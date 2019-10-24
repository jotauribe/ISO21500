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
        title: 'Metodología',
        dataPath: 'description',
        isList: false,
        fields: ['management', 'estimation']
      },
      {
        name: 'probabilityLevels',
        title: 'Niveles de probabilidad',
        dataPath: 'probabilityLevels',
        isList: false,
        fields: ['almostTrue', 'probable', 'posible', 'unlikely', 'rare']
      },
      {
        name: 'budget',
        title: 'Presupuesto para la gestión del riesgo',
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
        title: 'Distribución de roles y responsabilidades',
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
            placeholder: 'Descripción'
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
        title: 'Categorías y tipos de riesgos',
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
          { name: 'area', value: '', placeholder: 'Área' },
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
        title: 'Áreas de tolerancia al riesgo',
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
        placeholder: 'Descripción del proceso de gestión',
        dataPath: 'description.management'
      },
      {
        name: 'estimation',
        value: '',
        placeholder: 'Identificación y estimación',
        dataPath: 'description.estimation'
      },
      {
        name: 'almostTrue',
        value: '',
        placeholder: 'Casi cierto',
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
        placeholder: 'Poco probable',
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
        placeholder: 'Protocolo de contingencia',
        dataPath: 'protocols.contingency'
      },
      {
        name: 'riskControls',
        value: '',
        placeholder: 'Protocolo de control de riesgos',
        dataPath: 'protocols.riskControls'
      },
      {
        name: 'riskComunication',
        value: '',
        placeholder: 'Comunicación de riesgos',
        dataPath: 'protocols.riskComunication'
      },
      {
        name: 'riskPlanAuditory',
        value: '',
        placeholder: 'Protocolo de auditoría de plan de riesgos',
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
