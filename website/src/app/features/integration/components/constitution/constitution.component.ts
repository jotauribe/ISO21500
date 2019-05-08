import { LoadInfo } from './../../../../core/store/constitution/constitution.actions';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, OnChanges } from '@angular/core';
import { CoreState } from '~/app/core/store';
import { tap, switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OpenDialog } from '~/app/core/store/new-project/new-project.actions';

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
    private route: ActivatedRoute
  ) {
    this.constitutionForm = formBuilder.group({
      strategicView: [null],
      description: [null],
      viabilityAnalysis: [null],
      generalRequirements: [null],
      justification: [null]
    });
  }

  ngOnInit() {
    this.store
      .select(state => state.constitution)
      .subscribe(data => this.constitutionForm.patchValue(data));
    this.store.dispatch(new LoadInfo('5c900e87e24fa2200c0c790e8'));
  }
}
