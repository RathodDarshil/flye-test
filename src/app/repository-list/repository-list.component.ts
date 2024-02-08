import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
// import { RepositoryItemComponent } from './repository-item/repository-item.component';
// import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';

@Component({
    selector: 'app-repository-list',
    templateUrl: './repository-list.component.html',
    styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  repositories: any[] = [];
  isLoading: boolean = true;

constructor(private apiService: ApiService) {}

ngOnInit() {
  this.apiService.getRepositories().subscribe({
    next: (data: any) => {
      this.repositories = data;
      this.isLoading = false;
    },
    error: (error: any) => {
      console.error(error);
      this.isLoading = false;
    }
  });
}
}
