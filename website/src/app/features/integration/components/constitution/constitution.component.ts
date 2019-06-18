import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CoreState } from '~/app/core/store';
import {
  LoadPrevInfo,
  SavePrevInfo,
  LoadObjectives,
  CreateObjectives,
  LoadMilestones,
  SaveMilestone,
  CreateMilestone
} from '~/app/core/store/constitution/constitution.actions';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { FormDialogsService } from '~/app/shared/services/form-dialogs.service';

export interface Objective {
  position: number;
  description: string;
  metrics: number;
  aprobableBy: string;
}

@Component({
  selector: 'gpt-constitution',
  templateUrl: './constitution.component.html',
  styleUrls: ['./constitution.component.scss']
})
export class ConstitutionComponent implements OnInit {
  constitutionForm: FormGroup;
  constitutionState: any;
  prevInfoState;
  prevInfoValues = {};
  objectives;
  milestones;

  constructor(
    private store: Store<CoreState>,
    private route: ActivatedRoute,
    private forms: FormDialogsService
  ) {
    this.objectives = this.store.pipe(
      select(s => s.constitution.objectives.data)
    );

    this.milestones = this.store.pipe(
      select(s => s.constitution.milestones.data)
    );

    this.prevInfoState = this.store
      .pipe(
        select(s => s.constitution.previousInformation.data),
        map(data => {
          if (data) {
            const {
              vision,
              viability,
              description,
              requirements,
              client
            } = data;
            return { vision, viability, description, requirements, client };
          }
          return {};
        })
      )
      .subscribe(v => {
        this.prevInfoValues = v;
      });
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.store.dispatch(new LoadPrevInfo(p.projectId));
      this.store.dispatch(new LoadObjectives(p.projectId));
      this.store.dispatch(new LoadMilestones(p.projectId));
    });
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('projectId');
  }

  updatePrevInfo(data) {
    if (!_.isEqual(data, this.prevInfoValues)) {
      const projectId = this.route.snapshot.paramMap.get('projectId');
      this.store.dispatch(new SavePrevInfo({ projectId, data }));
    }
  }

  openMilestonesForm() {
    const projectId = this.getProjectId();

    this.forms
      .openMilestonesForm()
      .afterClosed()
      .subscribe(result => {
        this.store.dispatch(
          new CreateMilestone({ projectId, milestone: result })
        );
      });
  }

  openObjectivesForm() {
    this.forms
      .openObjectivesForm()
      .afterClosed()
      .subscribe(result => {
        const projectId = this.getProjectId();
        const objective = { projectId, objective: result };

        this.store.dispatch(
          new CreateObjectives({ projectId, objective: result })
        );
      });
  }

  openPhasesForm() {
    this.forms.openPhasesForm();
  }

  editMilestone({ milestone, index }) {
    const projectId = this.getProjectId();
    this.store.dispatch(
      new SaveMilestone({ projectId, milestoneId: milestone._id, milestone })
    );
  }
}
