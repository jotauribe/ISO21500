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

  updateObjective(projectId, objective) {
    return this.http.patch(
      `${this.url}/${projectId}/integration/constitution/objective`,
      objective
    );
  }
}
