import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  fetchProviders(projectId) {
    return this.http
      .get(`${this.url}/${projectId}/acquisitions/providers`)
      .pipe(map((response: any) => response[0]));
  }

  updateProviders({ projectId, providersId, providers }) {
    return this.http
      .patch(
        `${this.url}/${projectId}/acquisitions/providers/${providersId}`,
        providers
      )
      .pipe(map((response: any) => response.updatedDocument));
  }
}
