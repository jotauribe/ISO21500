import { ConstitutionService } from './../../services/constitution.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as ConstitutionActions from './constitution.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoreState } from '../reducers';

@Injectable()
export class ConstitutionEffects {
  @Effect()
  savePrevInfo = this.actions.pipe(
    ofType(ConstitutionActions.Types.SavePrevInfo),
    withLatestFrom(
      this.store.pipe(select(s => s.constitution.previousInformation))
    ),
    switchMap(([action, { data }]: [ConstitutionActions.SavePrevInfo, any]) =>
      this.constitutionService
        .updatePrevInfo(action.payload.projectId, data._id, action.payload.data)
        .pipe(
          // If successful, dispatch success action with result
          map(data => {
            return new ConstitutionActions.SavePrevInfoDone(data);
          }),
          // If request fails, dispatch failed action
          catchError(error =>
            of(new ConstitutionActions.SavePrevInfoFail(error))
          )
        )
    )
  );

  @Effect()
  fetchPrevInfo = this.actions.pipe(
    ofType(ConstitutionActions.Types.LoadPrevInfo),
    switchMap((action: ConstitutionActions.LoadPrevInfo) =>
      this.constitutionService.fetchPrevInfo(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.LoadPrevInfoDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConstitutionActions.LoadPrevInfoFail(error)))
      )
    )
  );

  @Effect()
  fetchObjectives = this.actions.pipe(
    ofType(ConstitutionActions.Types.LoadObjectives),
    switchMap((action: ConstitutionActions.LoadObjectives) =>
      this.constitutionService.fetchObjectives(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.LoadObjectivesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new ConstitutionActions.LoadObjectivesFail(error))
        )
      )
    )
  );

  @Effect()
  saveObjectives = this.actions.pipe(
    ofType(ConstitutionActions.Types.SaveObjectives),
    switchMap((action: ConstitutionActions.SaveObjectives) =>
      this.constitutionService.updateObjective(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.SaveObjectivesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new ConstitutionActions.SaveObjectivesFail(error))
        )
      )
    )
  );

  @Effect()
  createObjectives = this.actions.pipe(
    ofType(ConstitutionActions.Types.CreateObjectives),
    switchMap((action: ConstitutionActions.CreateObjectives) =>
      this.constitutionService.createObjective(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.CreateObjectivesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new ConstitutionActions.CreateObjectivesFail(error))
        )
      )
    )
  );

  @Effect()
  fetchMilestones = this.actions.pipe(
    ofType(ConstitutionActions.Types.LoadMilestones),
    switchMap((action: ConstitutionActions.LoadMilestones) =>
      this.constitutionService.fetchMilestones(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.LoadMilestonesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new ConstitutionActions.LoadMilestonesFail(error))
        )
      )
    )
  );

  @Effect()
  saveMilestones = this.actions.pipe(
    ofType(ConstitutionActions.Types.SaveMilestone),
    switchMap((action: ConstitutionActions.SaveMilestone) =>
      this.constitutionService.updateMilestone(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.SaveMilestoneDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new ConstitutionActions.SaveMilestoneFail(error))
        )
      )
    )
  );

  @Effect()
  createMilestone = this.actions.pipe(
    ofType(ConstitutionActions.Types.CreateMilestone),
    switchMap((action: ConstitutionActions.CreateMilestone) =>
      this.constitutionService.createMilestone(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.CreateMilestoneDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new ConstitutionActions.CreateMilestoneFail(error))
        )
      )
    )
  );

  @Effect()
  fetchPhases = this.actions.pipe(
    ofType(ConstitutionActions.Types.LoadPhases),
    switchMap((action: ConstitutionActions.LoadPhases) =>
      this.constitutionService.fetchPhases(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.LoadPhasesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConstitutionActions.LoadPhasesFail(error)))
      )
    )
  );

  @Effect()
  savePhases = this.actions.pipe(
    ofType(ConstitutionActions.Types.SavePhases),
    switchMap((action: ConstitutionActions.SavePhases) =>
      this.constitutionService.updatePhases(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.SavePhasesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConstitutionActions.SavePhasesFail(error)))
      )
    )
  );

  @Effect()
  createPhases = this.actions.pipe(
    ofType(ConstitutionActions.Types.CreatePhases),
    switchMap((action: ConstitutionActions.CreatePhases) =>
      this.constitutionService.createPhases(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new ConstitutionActions.CreatePhasesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new ConstitutionActions.CreatePhasesFail(error)))
      )
    )
  );

  constructor(
    private actions: Actions,
    private constitutionService: ConstitutionService,
    private store: Store<CoreState>
  ) {}
}
