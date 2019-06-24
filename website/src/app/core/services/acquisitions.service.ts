import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcquisitionsService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchAcquisitions(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/acquisitions/acquisitions`)
      .pipe(map((response: any) => response[0]));
  }

  updateAcquisitions({ projectId, acquisitionsId, acquisitions }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/acquisitions/acquisitions/${acquisitionsId}`,
        acquisitions
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
