import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstitutionService {
  constructor(private http: HttpClient) {}

  save(constitution) {
    return this.http.post('http://192.168.0.5:5001/constitution', constitution);
  }

  fetch(id) {
    return this.http.get(
      `http://192.168.0.5:5001/api/v1/constitution/projects/${id}`
    );
  }
}
