import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryItemComponent } from './repository-item/repository-item.component';

const routes: Routes = [
  { path: '/search', component: SearchBarComponent },
  { path: 'repositories', component: RepositoryListComponent },
  { path: 'repository/:id', component: RepositoryItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
