import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';

import { RepositoryListComponent } from './repository-list/repository-list.component'; 
import { RepositoryItemComponent } from './repository-item/repository-item.component'; 
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent,
    RepositoryItemComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
