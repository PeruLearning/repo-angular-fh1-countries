import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryResponse } from '../interfaces/country-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiBaseAddress: string = 'https://countriesnow.space';
  private getAllCountriesWithCapitalEndpoint: string = 'api/v0.1/countries/capital';

  constructor(private http: HttpClient) { }

  public listAllWithCapital2(): Observable<CountryResponse> {
    return this.http
      .get<CountryResponse>(`${this.apiBaseAddress}/${this.getAllCountriesWithCapitalEndpoint}`);
  }
}
