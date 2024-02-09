import { Component, Output, EventEmitter } from '@angular/core';

import "./search-bar.component.scss";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})

export class SearchBarComponent {
    @Output() searchEvent = new EventEmitter<string>();

    username: string = '';
    searchBar: string = 'searchBar'; 
    
    constructor(private router: Router) {}

    onSearchButtonClick() {
      this.router.navigate(['repositories', { username: this.username }]);
      this.searchEvent.emit(this.username);
    }
  
    search() {
      this.searchEvent.emit(this.username);
    }
}
