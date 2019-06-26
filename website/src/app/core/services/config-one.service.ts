import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigOneService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchConfigOne(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/integration/configOne`)
      .pipe(map((response: any) => response[0]));
  }

  updateConfigOne({ projectId, configOneId, configOne }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/integration/configOne/${configOneId}`,
        configOne
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
