import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiBaseAddress: string = 'https://restcountries.com';
  private getByCapitalEndpoint: string = 'v3.1/capital';
  private getByNameEndpoint: string = 'v3.1/name';
  private getByRegionEndpoint: string = 'v3.1/region';

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
}
