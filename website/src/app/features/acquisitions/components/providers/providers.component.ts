import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { startWith } from 'rxjs/operators';
import {
  UpdateProviders,
  LoadProviders
} from '~/app/core/store/providers/providers.actions';

@Component({
  selector: 'gpt-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'teamMembers',
        title: 'Miembros del Equipo del Proyecto',
        dataPath: 'teamMembers',
        isList: true,
        schema: {
          title: 'name',
          sufix: 'lastName',
          prefix: 'rol',
          secondaryInfo: [
            { title: 'Departamento', info: 'department' },
            { title: 'Email', info: 'email' }
          ]
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          { name: 'lastName', value: '', placeholder: 'Apellido' },
          {
            name: 'rol',
            value: '',
            placeholder: 'Funcion/Rol en el Proyecto'
          },
          {
            name: 'department',
            value: '',
            placeholder: 'Departament'
          },
          {
            name: 'email',
            value: '',
            placeholder: 'email'
          }
        ]
      }
    ]
  };

  data: Observable<any>;

  isDataLoaded: Observable<boolean>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {
    this.store.dispatch(new LoadProviders(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.members.data));
    this.isDataLoaded = this.store.pipe(
      select(s => s.members.isLoaded),
      startWith(false)
    );
  }

  ngOnInit() {}

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();

    this.store.dispatch(new UpdateProviders({ members: data, projectId }));
  }
}
