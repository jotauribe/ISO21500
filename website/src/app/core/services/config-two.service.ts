import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigTwoService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchConfigTwo(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/integration/configTwo`)
      .pipe(map((response: any) => response[0]));
  }

  updateConfigTwo({ projectId, configTwoId, configTwo }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/integration/configTwo/${configTwoId}`,
        configTwo
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
