import { Component, Input } from '@angular/core';
import "./repository-item.component.scss";

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent {
  @Input() repository: any;

}
