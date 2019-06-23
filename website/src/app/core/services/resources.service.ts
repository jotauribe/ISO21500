import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchResources(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/resources/resources`)
      .pipe(map((response: any) => response[0]));
  }

  updateResources({ projectId, resourcesId, resources }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/resources/resources/${resourcesId}`,
        resources
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
