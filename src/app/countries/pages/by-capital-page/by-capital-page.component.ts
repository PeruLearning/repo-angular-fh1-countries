import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private service: CountriesService) {}

  searchByCapital(term: string): void {
    this.service.searchByCapital(term)
      .subscribe(response => {
        this.countries = response;
    })
  }
}
