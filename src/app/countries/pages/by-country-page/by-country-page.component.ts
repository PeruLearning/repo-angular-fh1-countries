import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public initialValue: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private service: CountriesService) { }

  public ngOnInit(): void {
    this.initialValue = this.service.cacheStore.byCountry.term;
    this.countries = this.service.cacheStore.byCountry.countries;
  }

  public searchByCountry(term: string): void {
    this.isLoading = true;
    this.service.searchByCountryName(term)
      .subscribe(response => {
        this.countries = response;
        this.isLoading = false;
      });
  }
}
