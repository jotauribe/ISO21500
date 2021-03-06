import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import {
  LoadPlanning,
  UpdatePlanning
} from '~/app/core/store/planning/planning.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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
        title: 'Metodología',
        isList: false,
        fields: ['communication', 'adaptation', 'keyAspects', 'planRevision']
      },
      {
        name: 'processes',
        title: 'Procesos',
        isList: true,
        dataPath: 'processes',
        schema: {
          title: 'process',
          prefix: 'phase',
          mainInfo: 'status',
          secondaryInfo: [
            { title: 'Entradas', info: 'entries' },
            { title: 'Salidas', info: 'outputs' },
            { title: 'Dependencias', info: 'dependencies' }
          ]
        },
        fields: [
          {
            name: 'phase',
            optionsId: 'phases',
            value: '',
            placeholder: 'Fase',
            type: 'select'
          },
          {
            name: 'process',
            value: '',
            placeholder: 'Proceso'
          },
          {
            name: 'entries',
            value: '',
            placeholder: 'Entradas'
          },
          {
            name: 'outputs',
            value: '',
            placeholder: 'Salidas'
          },
          {
            name: 'dependencies',
            value: '',
            placeholder: 'Dependencias'
          }
        ]
      },
      {
        name: 'baselines',
        title: 'Líneas Base',
        isList: true,
        isFixedLength: true,
        isObject: true,
        dataPath: 'baselines',
        schema: {
          titles: {
            schedule: 'Línea base de tiempo / cronograma',
            costs: 'Línea base de coste',
            scope: 'Línea base de alcance',
            quality: 'Línea base de calidad'
          },
          title: 'title',
          prefix: undefined,
          mainInfo: 'description',
          secondaryInfo: [
            { title: 'Umbral de variación', info: 'variationTreshold' },
            { title: 'Seguimiento y Control', info: 'controlTracing' }
          ]
        },
        fields: [
          { name: 'description', value: '', placeholder: 'Descripción' },
          {
            name: 'variationTreshold',
            value: '',
            placeholder: 'Umbral de variación'
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
        placeholder: 'Procesos de comunicación entre stakeholders',
        dataPath: 'methodology.communication'
      },
      {
        name: 'adaptation',
        value: '',
        placeholder: 'Medidas de adaptación necesarias en los procesos',
        dataPath: 'methodology.adaptation'
      },
      {
        name: 'keyAspects',
        value: '',
        placeholder: 'Aspectos claves y decisiones pendientes',
        dataPath: 'methodology.keyAspects'
      },
      {
        name: 'planRevision',
        value: '',
        placeholder: 'Proceso de revisión del plan director del proyecto',
        dataPath: 'methodology.planRevision'
      }
    ]
  };

  data: Observable<any>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new LoadPlanning(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.planning.data));
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();

    this.store.dispatch(new UpdatePlanning({ planning: data, projectId }));
  }
}
