import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public initialValue: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private service: CountriesService) {}

  public ngOnInit(): void {
    this.countries = this.service.cacheStore.byCapital.countries;
    this.initialValue = this.service.cacheStore.byCapital.term; 
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.service.searchByCapital(term)
      .subscribe(response => {
        this.countries = response;
        this.isLoading = false;
    })
  }
}
