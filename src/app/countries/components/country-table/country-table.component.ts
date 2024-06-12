import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country-data';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {
  @Input({
    required: true
  })
  public countries: Country[] = [];
}
