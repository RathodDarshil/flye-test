import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs'; 
import { CacheService } from '../cache.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) { }

  getRepositories(githubUsername: string): Observable<any[]> {
    const cacheKey = `repositories_${githubUsername}`;
    const cachedData = this.cacheService.get(cacheKey);
    if (cachedData) {
      return of(cachedData);
  }

  const url = `https://api.github.com/users/${githubUsername}`;

  return this.httpClient.get<any[]>(url).pipe(
    map(data => {
      this.cacheService.set(cacheKey, data);
      return data;
    }),

    catchError(error => {
      console.error('Error fetching repositories:', error);
      return of([]); 
    })
  );
}
  
  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }
}
