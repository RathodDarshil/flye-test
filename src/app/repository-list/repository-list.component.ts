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
  totalPages = 0;
  totalReposPerPage: number = 6;
  currentPage: number = 1;

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
          this.getData(githubUsername, 0);
        } else {
          console.error('Username not provided in route parameters.');
        }
      }
    });
  }
  handleRepositoryClick(clickedRepository: any) {
    console.log('Repository clicked:', clickedRepository);
  }
  calculateTotalPages() {
    console.log('total pages:', this.totalPages);
    console.log('repository length:', this.userInfo.public_repos);
    this.totalPages = Math.ceil(
      this.userInfo.public_repos / this.totalReposPerPage
    );
  }

  goToPage(page: number) {
    this.currentPage = page;
    console.log(`Navigating to page ${page}`);
    this.getData(this.selectedUsername, page);
  }
  totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getData(githubUsername: string, page: number) {
    this.repositories = {};
    this.apiService.getRepositories(githubUsername, 6, page).subscribe({
      next: (data: any) => {
        this.repositories = data;
        this.isLoading = false;
        this.userNotFound = data.length === 0;

        this.calculateTotalPages();
        console.log('asdasdasd', this.repositories);
      },
      error: (error: any) => {
        console.error(error);
        this.isLoading = false;
        this.userNotFound = true;
      },
    });
  }
}
