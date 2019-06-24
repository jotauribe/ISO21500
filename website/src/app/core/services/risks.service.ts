import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RisksService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchRisks(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/integration/risks`)
      .pipe(map((response: any) => response[0]));
  }

  updateRisks({ projectId, risksId, risks }) {
    return this.http
      .patch(`${this.url}/${projectId}/integration/risks/${risksId}`, risks)
      .pipe(map((response: any) => response.updatedDocument));
  }
}
