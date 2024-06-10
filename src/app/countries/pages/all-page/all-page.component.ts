import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country-data';

@Component({
  selector: 'country-all-page',
  templateUrl: './all-page.component.html',
  styles: ``
})
export class AllPageComponent {

  public countries: Country[] = [];

  constructor(private service: CountriesService) {
    this.listWithCapital();
  }

  listWithCapital(): void {
    this.service.listAllWithCapital()
      .subscribe(response => {
        this.countries = response.data;
      });
  }
}
