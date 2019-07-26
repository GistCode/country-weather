import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  searchCountryQuery = '';
  @Input() query: string;
  ngOnInit(): void {
    if (this.query) {
      this.searchCountryQuery = this.query;
    }
  }
}
