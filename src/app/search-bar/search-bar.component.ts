import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  username: string = '';
  searchBar: string = 'searchBar';

  constructor(private router: Router, private githubService: GithubService) {}

  navigateToRepositories() {
    console.log('Navigating to repositories', this.username);
    this.router.navigate(['repositories', this.username]);
  }

  onSearchButtonClick() {
    this.githubService.getUserInfo(this.username).subscribe(
      (data: any) => {
        this.searchEvent.emit(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  search() {
    console.log('Search button clicked');
    this.onSearchButtonClick();
    console.log('Search event emitted', this.username);
  }
}
