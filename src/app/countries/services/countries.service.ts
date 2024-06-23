import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, pipe, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../types/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiBaseAddress: string = 'https://restcountries.com';
  private getByCapitalEndpoint: string = 'v3.1/capital';
  private getByNameEndpoint: string = 'v3.1/name';
  private getByRegionEndpoint: string = 'v3.1/region';
  private getByAlphaCodeEndpoint: string = 'v3.1/alpha';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  public searchByCapital(term: string): Observable<Country[]> {
    if (term?.length === 0) return of([]);

    const url: string = `${ this.apiBaseAddress }/${this.getByCapitalEndpoint}/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(response => this.cacheStore.byCapital = { term, countries: response }),
        tap(() => this.saveToLocalStorage())
        // delay(2000)
      );
  }

  public searchByCountryName(term: string): Observable<Country[]> {
    if (term?.length === 0) return of([]);

    const url: string = `${this.apiBaseAddress}/${this.getByNameEndpoint}/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(response => this.cacheStore.byCountry = { term, countries: response }),
        tap(() => this.saveToLocalStorage())
        // delay(2000)
      );
  }

  public searchByRegion(region: Region): Observable<Country[]> {
    const url: string = `${this.apiBaseAddress}/${this.getByRegionEndpoint}/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(response => this.cacheStore.byRegion = { region, countries: response }),
      tap(() => this.saveToLocalStorage())
      // delay(2000)
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

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => {
          return of([])
        })
      );
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    if (localStorage.getItem('cacheStore')) {
      this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }
  }
}
