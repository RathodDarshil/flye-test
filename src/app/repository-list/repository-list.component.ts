import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  repositories: any = {};
  isLoading: boolean = true;
  userNotFound: boolean = true;
  selectedUsername: string = '';
  userInfo: any;
  img: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const githubUsername = params['username'];
      this.selectedUsername = githubUsername;

      console.log('Received username:', githubUsername);

      if (githubUsername) {
        this.apiService.getUserInfo(githubUsername).subscribe({
          next: (userInfo: any) => {
            this.userInfo = userInfo;
          },
          error: (error: any) => {
            console.error('Error fetching user info:', error);
          },
        });

        if (githubUsername) {
          this.apiService.getRepositories(githubUsername).subscribe({
            next: (data: any) => {
              this.repositories = data;
              this.isLoading = false;
              this.userNotFound = data.length === 0;
              console.log('asdasdasd', this.repositories);
            },
            error: (error: any) => {
              console.error(error);
              this.isLoading = false;
              this.userNotFound = true;
            },
          });
        } else {
          console.error('Username not provided in route parameters.');
        }
      }
    });
  }
  handleRepositoryClick(clickedRepository: any) {
    console.log('Repository clicked:', clickedRepository);
  }
}
