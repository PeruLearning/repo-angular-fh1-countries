import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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
    const url: string = `${ this.apiBaseAddress }/${this.getByCapitalEndpoint}`;
    return this.http.get<Country[]>(`${url}/${term}`)
      .pipe(
        catchError(() => {
          return of([])
        })
      );
  }

  public searchByCountryName(term: string): Observable<Country[]> {
    const url: string = `${this.apiBaseAddress}/${this.getByNameEndpoint}`;
    return this.http.get<Country[]>(`${url}/${term}`)
      .pipe(
        catchError(() => {
          return of([])
        })
      );
  }

  public searchByRegion(term: string): Observable<Country[]> {
    const url: string = `${this.apiBaseAddress}/${this.getByRegionEndpoint}`;
    return this.http.get<Country[]>(`${url}/${term}`)
      .pipe(
        catchError(() => {
          return  of([])
        })
      );
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
}
