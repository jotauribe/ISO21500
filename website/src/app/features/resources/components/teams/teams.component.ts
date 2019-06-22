import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { UpdateTeams, LoadTeams } from '~/app/core/store/teams/teams.actions';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'gpt-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'teams',
        title: 'Rol y Responsabilidades del Equipo del Proyecto',
        dataPath: 'teams',
        isList: true,
        schema: {
          title: 'name',
          prefix: 'rol',
          mainInfo: 'responsibilities'
        },
        fields: [
          { name: 'name', value: '', placeholder: 'Nombre' },
          {
            name: 'rol',
            value: '',
            placeholder: 'Funcion/Rol en el Proyecto'
          },
          {
            name: 'responsibilities',
            value: '',
            placeholder: 'Responsabilidades'
          }
        ]
      }
    ]
  };

  data: Observable<any>;

  isDataLoaded: Observable<boolean>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {
    this.store.dispatch(new LoadTeams(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.teams.data));
    this.isDataLoaded = this.store.pipe(
      select(s => s.teams.isLoaded),
      startWith(false)
    );
  }

  ngOnInit() {}

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();

    this.store.dispatch(new UpdateTeams({ teams: data, projectId }));
  }
}
