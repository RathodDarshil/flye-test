import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
// import { RepositoryItemComponent } from './repository-item/repository-item.component';
// import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

const routes: Routes = [
  { path: 'repositories/:username', component: RepositoryListComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {path: 'search', component: SearchBarComponent}
    
      // { path: '', redirectTo: 'repositories', pathMatch: 'full' },
      // { path: 'repositories', component: RepositoryListComponent },
      // { path: 'repository/:id', component: RepositoryItemComponent }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
