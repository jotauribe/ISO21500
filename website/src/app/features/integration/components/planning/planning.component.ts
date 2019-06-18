import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { LoadPlanning } from '~/app/core/store/planning/planning.actions';

@Component({
  selector: 'gpt-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'methodology',
        title: 'Metodologia',
        isList: false,
        fields: ['communication', 'adaptation', 'keyAspects', 'planRevision']
      },
      {
        name: 'baselines',
        title: 'Lineas Base',
        isList: true,
        dataPath: 'baselines',
        schema: {
          titles: {
            schedule: 'Linea base de tiempo / cronograma',
            costs: 'Linea base de coste',
            scope: 'Linea base de alcance',
            quality: 'Linea base de calidad'
          },
          title: 'title',
          prefix: undefined,
          mainInfo: 'description',
          secondaryInfo: [
            { title: 'Umbral de variacion', info: 'variationTreshold' },
            { title: 'Seguimiento y Control', info: 'controlTracing' }
          ]
        },
        fields: [
          { name: 'description', value: '', placeholder: 'Descripcion' },
          {
            name: 'variationTreshold',
            value: '',
            placeholder: 'Umbral de variacion'
          },
          {
            name: 'controlTracing',
            value: '',
            placeholder: 'Seguimiento y Control'
          }
        ]
      }
    ],
    fields: [
      {
        name: 'communication',
        value: '',
        placeholder: 'Procesos de comunicacion entre Stakeholders',
        dataPath: 'methodology.communication'
      },
      {
        name: 'adaptation',
        value: '',
        placeholder: 'Medidas de adaptacion necesarias en los procesos',
        dataPath: 'methodology.adaptation'
      },
      {
        name: 'keyAspects',
        value: '',
        placeholder: 'Aspectos claves y Decisiones pendientes',
        dataPath: 'methodology.keyAspects'
      },
      {
        name: 'planRevision',
        value: '',
        placeholder: 'Aspectos claves y Decisiones pendientes',
        dataPath: 'methodology.planRevision'
      }
    ]
  };

  data = {
    baselines: {
      schedule: {
        description: 'description',
        variationTreshold: 'Umbral de confianza',
        controlTracing: 'Esto es un control'
      },
      costs: {
        description: 'description',
        variationTreshold: 'Umbral de confianza',
        controlTracing: 'Esto es un control'
      }
    }
  };

  constructor(private store: Store<CoreState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPlanning());
  }
}
