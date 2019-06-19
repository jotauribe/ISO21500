import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchPlanning(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/integration/planning`)
      .pipe(map((response: any) => response[0]));
  }

  updatePlanning({ projectId, planningId, planning }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/integration/planning/${planningId}`,
        planning
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
