import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, CountryResponse } from '../interfaces/country-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiBaseAddress: string = 'https://countriesnow.space';
  private getWithCapitalEndpoint: string = 'api/v0.1/countries/capital';

  constructor(private http: HttpClient) { }

  public listAllWithCapital(): Observable<CountryResponse<Country[]>> {
    return this.http
      .get<CountryResponse<Country[]>>(`${this.apiBaseAddress}/${this.getWithCapitalEndpoint}`);
  }

  public searchByCountry(country: string): Observable<CountryResponse<Country>> {

    const requestBody = { country };
    return this.http
      .post<CountryResponse<Country>>(`${this.apiBaseAddress}/${this.getWithCapitalEndpoint}`, requestBody);
  }
}
