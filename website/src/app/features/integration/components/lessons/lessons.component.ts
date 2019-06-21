import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  LoadLessons,
  UpdateLessons
} from '~/app/core/store/lessons/lessons.actions';

@Component({
  selector: 'gpt-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'learnedLessons',
        title: 'Lecciones Aprendidas',
        dataPath: 'learnedLessons',
        isList: true,
        schema: {
          title: 'name',
          mainInfo: 'description',
          secondaryInfo: [
            {
              title: 'Objetivo',
              info: 'objective'
            },
            {
              title: 'Reporte',
              info: 'report'
            }
          ]
        },
        fields: [
          {
            name: 'name',
            value: '',
            placeholder: 'Nombre de Identificacion de la Leccion',
            dataPath: 'name'
          },
          {
            name: 'description',
            value: '',
            placeholder: 'Descripcion',
            dataPath: 'description'
          },
          {
            name: 'objective',
            value: '',
            placeholder: 'Objetivo',
            dataPath: 'objective'
          },
          {
            name: 'report',
            value: '',
            placeholder: 'Reporte',
            dataPath: 'report'
          }
        ]
      }
    ]
  };

  data: Observable<any>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new LoadLessons(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.lessons.data));
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();
    this.store.dispatch(new UpdateLessons({ lessons: data, projectId }));
  }
}
