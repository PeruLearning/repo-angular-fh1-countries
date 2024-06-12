import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiBaseAddress: string = 'https://restcountries.com';
  private getWithCapitalEndpoint: string = 'v3.1/capital';

  constructor(private http: HttpClient) { }

  public searchByCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiBaseAddress}/${this.getWithCapitalEndpoint}/${term}`)
      .pipe(
        catchError(() => {
          return of([])
        })
      );
  }
}
