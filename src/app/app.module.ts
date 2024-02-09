
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryItemComponent } from './repository-item/repository-item.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RepositoryListComponent,
    RepositoryItemComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
