import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiBaseAddress: string = 'https://restcountries.com';
  private getByCapitalEndpoint: string = 'v3.1/capital';
  private getByNameEndpoint: string = 'v3.1/name';
  private getByRegionEndpoint: string = 'v3.1/region';
  private getByAlphaCodeEndpoint: string = 'v3.1/alpha';

  constructor(private http: HttpClient) { }

  public searchByCapital(term: string): Observable<Country[]> {
    const url: string = `${ this.apiBaseAddress }/${this.getByCapitalEndpoint}/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchByCountryName(term: string): Observable<Country[]> {
    const url: string = `${this.apiBaseAddress}/${this.getByNameEndpoint}/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchByRegion(term: string): Observable<Country[]> {
    const url: string = `${this.apiBaseAddress}/${this.getByRegionEndpoint}/${term}`;
    return this.getCountriesRequest(url);
  }

  public getByAlphaCode(code: string): Observable<Country | null> {
    const url: string = `${this.apiBaseAddress}/${this.getByAlphaCodeEndpoint}`;
    return this.http.get<Country[]>(`${url}/${code}`)
      .pipe(
        map(countries => countries.length == 1 ? countries[0] : null),
        catchError(() => {
          return of(null)
        })
      );
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => {
          return of([])
        }),
        // delay(2000)
      );
  }
}
