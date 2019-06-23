import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { startWith } from 'rxjs/operators';
import {
  LoadActivities,
  UpdateActivities
} from '~/app/core/store/activities/activities.actions';

@Component({
  selector: 'gpt-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'problemsForNextPeriod',
        title: 'Problemas Para el Siguiente Periodo',
        dataPath: 'problemsForNextPeriod',
        isList: false,
        isSingleField: true,
        fields: ['problemsForNextPeriod']
      },
      {
        name: 'activities',
        title: 'Actividades',
        dataPath: 'activities',
        isList: true,
        schema: {
          title: 'name',
          mainInfo: 'description',
          secondaryInfo: [
            {
              title: 'Estado',
              info: 'status'
            }
          ]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          {
            name: 'description',
            value: '',
            placeholder: 'Descripcion'
          },
          {
            name: 'status',
            value: '',
            placeholder: 'Estado'
          }
        ]
      },
      {
        name: 'identifiedRisk',
        title: 'Riesgos Identificados',
        dataPath: 'identifiedRisk',
        isList: true,
        schema: {
          title: 'name',
          mainInfo: 'description'
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          {
            name: 'description',
            value: '',
            placeholder: 'Descripcion'
          }
        ]
      }
    ],
    fields: [
      {
        name: 'problemsForNextPeriod',
        value: '',
        isWide: true,
        dataPath: 'problemsForNextPeriod'
      }
    ]
  };

  data: Observable<any>;

  isDataLoaded: Observable<boolean>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {
    this.store.dispatch(new LoadActivities(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.activities.data));
    this.isDataLoaded = this.store.pipe(
      select(s => s.activities.isLoaded),
      startWith(false)
    );
  }

  ngOnInit() {}

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();
    this.store.dispatch(new UpdateActivities({ activities: data, projectId }));
  }
}
