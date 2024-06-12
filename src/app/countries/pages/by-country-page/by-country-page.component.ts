import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country-data';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public country!: Country;

  constructor(private service: CountriesService) { }

  public searchByCountry(country: string): void {
    this.service.searchByCountry(country)
      .subscribe(response => {
        this.country = response.data;
    })
  }
}
