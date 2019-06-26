import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchTeams(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/resources/teams`)
      .pipe(map((response: any) => response[0]));
  }

  updateTeams({ projectId, teamsId, teams }) {
    return this.http
      .patch(`${this.url}/${projectId}/resources/teams/${teamsId}`, teams)
      .pipe(map((response: any) => response.updatedDocument));
  }
}
