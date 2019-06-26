import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { startWith } from 'rxjs/operators';
import {
  UpdateResources,
  LoadResources
} from '~/app/core/store/resources/resources.actions';

@Component({
  selector: 'gpt-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'resources',
        title: 'Recursos',
        dataPath: 'resources',
        isList: true,
        schema: {
          title: 'name',
          prefix: 'kind',
          secondaryInfo: [
            { title: 'Comentarios', info: 'comments' },
            { title: 'Cantidad', info: 'quantity' }
          ]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre Recurso' },
          { name: 'kind', value: '', placeholder: 'Tipo' },
          {
            name: 'comments',
            value: '',
            placeholder: 'Comentarios'
          },
          {
            name: 'quantity',
            value: '',
            placeholder: 'Cantidad'
          }
        ]
      }
    ]
  };

  data: Observable<any>;

  isDataLoaded: Observable<boolean>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {
    this.store.dispatch(new LoadResources(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.resources.data));
    this.isDataLoaded = this.store.pipe(
      select(s => s.resources.isLoaded),
      startWith(false)
    );
  }

  ngOnInit() {
    console.log('HOLA BEBE');
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();
    this.store.dispatch(new UpdateResources({ resources: data, projectId }));
  }
}
