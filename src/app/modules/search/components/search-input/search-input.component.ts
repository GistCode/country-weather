import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnChanges {
  searchCountryQuery = '';
  @Input() query: string;
  ngOnInit(): void {
    if (this.query) {
      this.searchCountryQuery = this.query;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.searchCountryQuery = changes.query.currentValue;
  }
}
