import { Store } from '@ngrx/store';
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

export interface Objective {
  position: number;
  description: string;
  metrics: number;
  aprobableBy: string;
}

const OBJECTIVES: Objective[] = [
  {
    position: 1,
    description: 'Presupuesto',
    metrics: 1.0079,
    aprobableBy: 'John Connor'
  },
  {
    position: 2,
    description: 'Objetivo 2',
    metrics: 4.0026,
    aprobableBy: 'Julia Robert'
  },
  {
    position: 4,
    description: 'Objetivo 4',
    metrics: 9.0122,
    aprobableBy: 'John Connor'
  }
];

@Component({
  selector: 'gpt-constitution',
  templateUrl: './constitution.component.html',
  styleUrls: ['./constitution.component.scss']
})
export class ConstitutionComponent implements OnInit {
  objectives = [
    {
      position: 4,
      description: 'This is a test objective',
      metrics: 'This is a test metric',
      approbableBy: 'John Connor'
    },
    {
      position: 2,
      description: 'Objetivo 2',
      metrics: 4.0026,
      aprobableBy: 'Julia Robert'
    },
    {
      position: 2,
      description: 'Objetivo 2',
      metrics: 4.0026,
      aprobableBy: 'Julia Robert'
    }
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    {
      position: 4,
      description: 'This is a test objective',
      metrics: 'This is a test metric',
      aprobableBy: 'John Connor'
    },
    {
      position: 1,
      description: 'Objetivo 2',
      metrics: 4.0026,
      aprobableBy: 'Julia Robert'
    },
    {
      position: 2,
      description: 'Objetivo 2',
      metrics: 4.0026,
      aprobableBy: 'Julia Robert'
    }
  ];

  constitutionForm: FormGroup;
  constitutionState: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CoreState>,
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.constitutionForm = formBuilder.group({
      strategicView: [null],
      description: [null],
      viabilityAnalysis: [null],
      generalRequirements: [null],
      justification: [null]
    });

    this.matIconRegistry.addSvgIconSet(
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sections.svg')
    );
  }

  ngOnInit() {
    this.store
      .select(state => state.constitution)
      .subscribe(data => this.constitutionForm.patchValue(data));

    this.route.params.subscribe(p =>
      this.store.dispatch(new LoadPrevInfo(p.projectId))
    );
  }

  updatePrevInfo(data) {
    const projectId = this.route.snapshot.paramMap.get('projectId');
    this.store.dispatch(new SavePrevInfo({ projectId, data }));
  }
}
