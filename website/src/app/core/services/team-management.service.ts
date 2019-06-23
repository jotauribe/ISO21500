import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamManagementService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchTeamManagement(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/resources/teamManagement`)
      .pipe(map((response: any) => response[0]));
  }

  updateTeamManagement({ projectId, teamManagementId, teamManagement }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/resources/teamManagement/${teamManagementId}`,
        teamManagement
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
