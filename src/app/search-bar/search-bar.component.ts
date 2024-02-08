import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import "./search-bar.component.scss";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})

export class SearchBarComponent {
    username: string = '';
  
    @Output() searchEvent = new EventEmitter<string>();
searchBar: any;
  
    search() {
      this.searchEvent.emit(this.username);
    }
}
