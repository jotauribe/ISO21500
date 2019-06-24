import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { startWith } from 'rxjs/operators';
import {
  UpdateAcquisitions,
  LoadAcquisitions
} from '~/app/core/store/acquisitions/acquisitions.actions';

@Component({
  selector: 'gpt-acquisition-list',
  templateUrl: './acquisition-list.component.html',
  styleUrls: ['./acquisition-list.component.scss']
})
export class AcquisitionListComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'acquisitions',
        title: 'Lista de Acquisiciones',
        dataPath: 'acquisitions',
        isList: true,
        schema: {
          title: 'name',
          prefix: 'kind',
          secondaryInfo: [
            { title: 'Cantidad', info: 'quantity' },
            { title: 'Comentarios', info: 'comments' },
            { title: 'Precio', info: 'price' }
          ]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          {
            name: 'kind',
            value: '',
            placeholder: 'Tipo'
          },
          { name: 'comments', value: '', placeholder: 'Comentarios' },
          {
            name: 'price',
            value: '',
            placeholder: 'Precio'
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
    this.store.dispatch(new LoadAcquisitions(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.acquisitions.data));
    this.isDataLoaded = this.store.pipe(
      select(s => s.acquisitions.isLoaded),
      startWith(false)
    );
  }

  ngOnInit() {}

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();

    this.store.dispatch(
      new UpdateAcquisitions({ acquisitions: data, projectId })
    );
  }
}
