import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CacheService } from './cache.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) {}
  getUserInfo(githubUsername: string): Observable<any> {
    const url = `https://api.github.com/users/${githubUsername}`;
    return this.httpClient.get(url).pipe(
      map((response: any) => ({
        id: response.id,
        login: response.login,
        name: response.name,
        avatar_url: response.avatar_url,
        html_url: response.html_url,
      }))
    );
  }

  getRepositories(githubUsername: string): Observable<any[]> {
    const cacheKey = `repositories_${githubUsername}`;
    const cachedData = this.cacheService.get(cacheKey);
    if (cachedData) {
      return of(cachedData);
    }

    const url = `https://api.github.com/users/${githubUsername}/repos`;

    return this.httpClient.get<any[]>(url).pipe(
      map((data) => {
        this.cacheService.set(cacheKey, data);
        return data;
      }),

      catchError((error) => {
        console.error('Error fetching repositories:', error);
        return of([]);
      })
    );
  }
}
