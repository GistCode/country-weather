import { Component, OnInit, Input } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { CountryWeather } from '@modules/search/interfaces';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss']
})
export class SearchResultsListComponent implements OnInit {
  watcher$: Subscription;
  gridCols = 2;
  @Input() searchResults: CountryWeather[];

  constructor(mediaObserver: MediaObserver) {
    this.watcher$ = mediaObserver
      .asObservable()
      .subscribe((change: MediaChange[]) => {
        this.gridCols = change[0].mqAlias === 'xs' ? 1 : 2;
      });
  }

  ngOnInit(): void {}
}
