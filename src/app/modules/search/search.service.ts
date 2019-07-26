import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Country, Weather, CountryWeather } from '@modules/search/interfaces';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getCountry$(country: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${environment.countryAPI}${country}`, {
        params: { fields: environment.countryFields.join(';') }
      })
      .pipe(
        map((response: Country[]) =>
          Object.values(response).filter((value: Country) => value.capital)
        )
      )
      .pipe(
        map((response: Country[]) =>
          Object.entries(response)
            .slice(0, 20)
            .map(entry => entry[1])
        )
      );
  }

  getCityWeather$(city: string): Observable<Weather> {
    return this.http.get<Weather>(environment.weatherAPI, {
      params: { q: city, key: environment.apixukey }
    });
  }

  getCountryWeather$(countryInput: string): Observable<CountryWeather[]> {
    return this.getCountry$(countryInput).pipe(
      mergeMap((countries: Country[]) =>
        forkJoin(
          countries.map((country: CountryWeather) =>
            this.getCityWeather$(country.capital).pipe(
              map((weather: Weather) => {
                country.weather = weather;

                return country;
              })
            )
          )
        )
      )
    );
  }
}
