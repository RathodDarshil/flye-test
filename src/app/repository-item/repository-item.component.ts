import { Component, EventEmitter, Input, Output } from '@angular/core';
// import "./repository-item.component.scss";

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss'],
})
export class RepositoryItemComponent {
  @Input() repository: any;
  @Output() repositoryClicked: EventEmitter<any> = new EventEmitter();
  item: any = {};

  onRepositoryClick() {
    this.repositoryClicked.emit(this.repository);
  }
}
