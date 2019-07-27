import { Component, OnDestroy } from '@angular/core';
import { CountryWeather } from '@modules/search/interfaces';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnDestroy {
  searchResults: CountryWeather[];
  query: string;
  loading = false;
  hasError = false;
  paramMap$: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.setProgressBar();
    this.paramMap$ = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.query = params.get('countryQuery');
        this.resolvedDataHandler(
          this.activatedRoute.snapshot.data.searchResults
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.paramMap$.unsubscribe();
  }

  resolvedDataHandler(resolvedData: CountryWeather[] | any): void {
    if (Array.isArray(resolvedData)) {
      this.searchResults = resolvedData;
    } else if (typeof resolvedData !== 'undefined') {
      this.searchResults = undefined;
      this.snackBar.open('Try Searching something valid', 'OK', {
        duration: 5000,
        verticalPosition: 'top'
      });
    } else {
      this.searchResults = undefined;
    }
  }

  setProgressBar(): void {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
