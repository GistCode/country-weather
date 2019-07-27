import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';
import { SearchInputComponent } from '@modules/search/components/search-input/search-input.component';
import { SearchRoutingModule } from '@modules/search/search-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchResultsListComponent } from '@modules/search/components/search-results-list/search-results-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SearchRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    SearchPageComponent,
    SearchInputComponent,
    SearchResultsListComponent
  ]
})
export class SearchModule {}
