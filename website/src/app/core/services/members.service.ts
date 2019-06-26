import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchMembers(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/resources/teamMembers`)
      .pipe(map((response: any) => response[0]));
  }

  updateMembers({ projectId, membersId, members }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/resources/teamMembers/${membersId}`,
        members
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
