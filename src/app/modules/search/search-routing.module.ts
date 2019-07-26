import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from '@modules/search/pages/search-page/search-page.component';
import { SearchResolverService } from '@modules/search/search-resolver.service';

const routes: Routes = [
  {
    path: 'search',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SearchPageComponent
      },
      {
        path: ':countryQuery',
        component: SearchPageComponent,
        resolve: {
          searchResults: SearchResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SearchResolverService]
})
export class SearchRoutingModule {}
