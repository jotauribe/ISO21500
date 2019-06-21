import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangesService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchChanges(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/integration/changes`)
      .pipe(map((response: any) => response[0]));
  }

  updateChanges({ projectId, changesId, changes }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/integration/changes/${changesId}`,
        changes
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
