import { Component, Input } from '@angular/core';
// import './skeleton-loader.component.scss';

@Component({
  selector: 'app-skeleton-loader',
  template: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent {
  @Input() isLoading: boolean = false;
}

