import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConstitutionService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  save(constitution) {
    return this.http.post(`${this.url}/`, constitution);
  }

  fetch(id) {
    return this.http.get(`${this.url}/${id}/integration/constitution`);
  }

  fetchPrevInfo(projectId) {
    return this.http.get(
      `${this.url}/${projectId}/integration/constitution/prev-info`
    );
  }

  updatePrevInfo(projectId, prevInfoId, prevInfo) {
    return this.http
      .patch(
        `${
          this.url
        }/${projectId}/integration/constitution/prev-info/${prevInfoId}`,
        prevInfo
      )
      .pipe(map((response: any) => response.updatedDocument));
  }

  fetchObjectives(projectId) {
    return this.http.get(
      `${this.url}/${projectId}/integration/constitution/objectives`
    );
  }

  updateObjective({ projectId, objectiveId, objective }) {
    return this.http.patch(
      `${
        this.url
      }/${projectId}/integration/constitution/objectives/${objectiveId}`,
      objective
    );
  }

  createObjective({ projectId, objective }) {
    return this.http
      .post(`${this.url}/${projectId}/integration/constitution/objectives/`, [
        objective
      ])
      .pipe(
        map(() => ({
          projectId,
          ...objective
        }))
      );
  }

  fetchMilestones(projectId) {
    return this.http.get(
      `${this.url}/${projectId}/integration/constitution/milestones`
    );
  }

  updateMilestone({ projectId, milestoneId, milestone }) {
    return this.http.patch(
      `${
        this.url
      }/${projectId}/integration/constitution/milestones/${milestoneId}`,
      milestone
    );
  }

  createMilestone({ projectId, milestone }) {
    return this.http
      .post(`${this.url}/${projectId}/integration/constitution/milestones/`, [
        milestone
      ])
      .pipe(
        map(() => ({
          projectId,
          ...milestone
        }))
      );
  }

  fetchPhases(projectId) {
    return this.http.get(
      `${this.url}/${projectId}/integration/constitution/phases`
    );
  }

  updatePhases({ projectId, phaseId, phase }) {
    return this.http.patch(
      `${this.url}/${projectId}/integration/constitution/phases/${phaseId}`,
      phase
    );
  }

  createPhases({ projectId, phase }) {
    return this.http
      .post(`${this.url}/${projectId}/integration/constitution/phases/`, [
        phase
      ])
      .pipe(
        map(() => ({
          projectId,
          ...phase
        }))
      );
  }
}
