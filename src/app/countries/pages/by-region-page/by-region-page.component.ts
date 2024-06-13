import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public countries: Country[] = [];

  constructor(private service: CountriesService){}

  public searchByRegion(region: Region): void {
    this.selectedRegion = region;

    this.service.searchByRegion(region)
      .subscribe(response => {
        this.countries = response;
    })
  }
}
