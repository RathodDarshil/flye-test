import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-repository-list',
    templateUrl: './repository-list.component.html',
    styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  repositories: any[] = [];
  isLoading: boolean = true;
  userNotFound: boolean=false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

ngOnInit() {
  this.route.params.subscribe(params => {
  const githubUsername = params['username'];

  this.apiService.getRepositories(githubUsername).subscribe({
    next: (data: any) => {
      this.repositories = data;
      this.isLoading = false;
      this.userNotFound = data.length === 0;
    },
    error: (error: any) => {
      console.error(error);
      this.isLoading = false;
      this.userNotFound = true; 
    }
  });
});
}
}
