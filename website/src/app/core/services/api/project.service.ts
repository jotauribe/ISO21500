import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'http://localhost:5001/api/v1/projects';

  constructor(private http: HttpClient) {}

  create(project) {
    return this.http.post(this.url, project);
  }

  find() {
    return this.http.get(this.url);
  }
}
