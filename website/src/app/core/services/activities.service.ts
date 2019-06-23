import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchActivities(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/integration/activities`)
      .pipe(map((response: any) => response[0]));
  }

  updateActivities({ projectId, activitiesId, activities }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/integration/activities/${activitiesId}`,
        activities
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
