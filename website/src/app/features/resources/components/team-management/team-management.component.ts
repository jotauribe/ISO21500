import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CoreState } from '~/app/core/store';
import { startWith } from 'rxjs/operators';
import {
  UpdateTeamManagement,
  LoadTeamManagement
} from '~/app/core/store/team-management/team-management.actions';
import { UploadProviderContract } from '~/app/core/store/providers/providers.actions';

@Component({
  selector: 'gpt-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {
  schema = {
    sections: [
      {
        name: 'teamOrganization',
        title: 'Documento de Organizacion del Equipo',
        dataPath: 'teamOrganization',
        isList: false,
        isFile: true,
        fields: ['teamOrganization'],
        url: function(data) {
          return `http://localhost:5001/api/v1/files/${data._id}`;
        }
      },
      {
        name: 'personalPlan',
        title: 'Plan de Desarrollo Personal',
        dataPath: 'personalPlan',
        isList: false,
        fields: ['justification', 'strengths', 'improvementArea']
      },
      {
        name: 'goals',
        title: 'Objetivos',
        dataPath: 'goals',
        isList: true,
        isFixedLength: true,
        isObject: true,
        schema: {
          titles: {
            scopeGoals: 'Objetivos de Alcance',
            qualityGoals: 'Objetivos de Calidad',
            planningGoals: 'Objetivos de Planificacion',
            budgetGoals: 'Objetivos de Presupuesto'
          },
          title: 'title',
          prefix: undefined,
          mainInfo: 'goals',
          secondaryInfo: [{ title: 'Comentarios', info: 'comments' }]
        },
        fields: [
          { name: 'goals', value: '', placeholder: 'Descripcion' },
          {
            name: 'comments',
            value: '',
            placeholder: 'Comentarios'
          }
        ]
      },
      {
        name: 'interpersonalSkills',
        title: 'Competencias Interpersonales',
        dataPath: 'interpersonalSkills',
        isList: true,
        isFixedLength: true,
        isObject: true,
        schema: {
          titles: {
            leadership: 'Liderazgo',
            communication: 'Comunicacion',
            teamWork: 'Trabajo en Equipo',
            decisions: 'Toma de Desiciones',
            conflictManagement: 'Manejo de Conflictos',
            assertiveness: 'Asertividad'
          },
          title: 'title',
          prefix: undefined,
          mainInfo: 'indicators',
          secondaryInfo: [{ title: 'Comentarios', info: 'comments' }]
        },
        fields: [
          { name: 'indicators', value: '', placeholder: 'Descripcion' },
          {
            name: 'comments',
            value: '',
            placeholder: 'Comentarios'
          }
        ]
      }
    ],
    fields: [
      {
        name: 'justification',
        value: '',
        placeholder: 'Vision/Justificacion del Proyecto',
        dataPath: 'personalPlan.justification'
      },
      {
        name: 'strengths',
        value: '',
        placeholder: 'Fortalezas Personales',
        dataPath: 'personalPlan.strengths'
      },
      {
        name: 'improvementArea',
        value: '',
        placeholder: 'Areas de Mejora',
        dataPath: 'personalPlan.improvementArea'
      },
      {
        name: 'teamOrganization',
        value: '',
        placeholder: 'Documento de Organizacion del Equipo',
        dataPath: 'teamOrganization',
        isFile: true,
        type: 'file'
      }
    ]
  };

  data: Observable<any>;

  isDataLoaded: Observable<boolean>;

  constructor(private store: Store<CoreState>, private route: ActivatedRoute) {
    this.store.dispatch(new LoadTeamManagement(this.getProjectId()));
    this.data = this.store.pipe(select(s => s.teamManagement.data));
    this.isDataLoaded = this.store.pipe(
      select(s => s.teamManagement.isLoaded),
      startWith(false)
    );
  }

  ngOnInit() {}

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  pushChanges(data) {
    const projectId = this.getProjectId();

    if (data.teamOrganization && data.teamOrganization.notLoaded) {
      this.store.dispatch(
        new UploadProviderContract({
          projectId,
          entityId: data._docId,
          fileToUpload: data.teamOrganization.file,
          fileName: data.teamOrganization.name
        })
      );
      data.teamOrganization = data.teamOrganization.name;
    }

    this.store.dispatch(
      new UpdateTeamManagement({ teamManagement: data, projectId })
    );
  }
}
