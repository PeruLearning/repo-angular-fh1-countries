import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country-data';

@Component({
  selector: 'country-info',
  templateUrl: './country-info.component.html',
  styles: ``
})
export class CountryInfoComponent {

  @Input({
    required: true
  })
  public country!: Country;

  public existsCountry = this.country !== undefined
}
