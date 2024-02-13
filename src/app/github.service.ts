import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl = 'https://api.github.com';
  getUserInfo(username: string) {
    const url = `${this.baseUrl}/users/${username}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient) {}

  getUserRepositories(username: string) {
    const url = `${this.baseUrl}/users/${username}/repos`;
    return this.http.get(url);
  }
}
