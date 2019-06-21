import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchLessons(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/integration/learnedLessons`)
      .pipe(map((response: any) => response[0]));
  }

  updateLessons({ projectId, lessonsId, lessons }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/integration/learnedLessons/${lessonsId}`,
        lessons
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
