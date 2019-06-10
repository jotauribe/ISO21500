import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get(
      `${this.url}/${id}/integration/constitution`
    );
  }

  fetchPrevInfo(projectId) {
    return this.http.get(
      `${this.url}/${projectId}/integration/constitution/prev-info`
    );
  }

  updatePrevInfo(projectId, prevInfo) {
    return this.http.patch(
      `${this.url}/${projectId}/integration/constitution/prev-info`, prevInfo
    );
  }

  fetchObjectives(projectId) {
    return this.http.get(
      `${this.url}/${projectId}/integration/constitution/prev-info`
    );
  }

  updateObjective(projectId, objective) {
    return this.http.patch(
      `${this.url}/${projectId}/integration/constitution/objective`, objective
    );
  }
}
