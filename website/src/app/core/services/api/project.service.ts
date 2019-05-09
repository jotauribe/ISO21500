import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  create(project) {
    return this.http.post('http://localhost:5000/api/v2/projects', project);
  }

  find() {
    return this.http.get('http://localhost:5000/api/v2/projects');
  }
}
