import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SearchService } from '@modules/search/search.service';
import { CountryWeather } from '@modules/search/interfaces';
@Injectable({
  providedIn: 'root'
})
export class SearchResolverService
  implements Resolve<Observable<CountryWeather[] | string>> {
  constructor(private searchService: SearchService) {}

  resolve(
    activatedRoute: ActivatedRouteSnapshot
  ): Observable<CountryWeather[] | string> {
    return this.searchService
      .getCountryWeather$(activatedRoute.params.countryQuery)
      .pipe(catchError((error: string) => of(error)));
  }
}
