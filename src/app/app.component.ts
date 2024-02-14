import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private apiService: ApiService) {
    const title = 'fyle-frontend-challenge';
  }

  ngOnInit() {
    // this.apiService.getUser('johnpapa').subscribe(console.log);
  }
}
