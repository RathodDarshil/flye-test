import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUserRepositories(username: string) {
    const url = `${this.baseUrl}/users/${username}/repos`;
    return this.http.get(url);
  }
}
