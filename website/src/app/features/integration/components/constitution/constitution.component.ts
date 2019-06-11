import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoreState } from '~/app/core/store';
import {
  LoadPrevInfo,
  SavePrevInfo
} from '~/app/core/store/constitution/constitution.actions';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

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

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CoreState>,
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIconSet(
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sections.svg')
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
    this.route.params.subscribe(p =>
      this.store.dispatch(new LoadPrevInfo(p.projectId))
    );
  }

  updatePrevInfo(data) {
    if (!_.isEqual(data, this.prevInfoValues)) {
      const projectId = this.route.snapshot.paramMap.get('projectId');
      this.store.dispatch(new SavePrevInfo({ projectId, data }));
    }
  }
}
