import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) {}

  signup(user: User) {
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      username: user.username,
      password: user.password
    };
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, user);
  }

  login({ password, username }): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa(username + ':' + password)}`
      })
    };

    return this.http.post<User>(
      `${this.url}/auth`,
      { user: { password, username } },
      httpOptions
    );
  }
}
