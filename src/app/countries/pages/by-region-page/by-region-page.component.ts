import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../types/region.type';

@Component({
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private service: CountriesService){}

  public ngOnInit(): void {
    this.selectedRegion = this.service.cacheStore.byRegion.region;
    this.countries = this.service.cacheStore.byRegion.countries;
  }

  public searchByRegion(region: Region): void {
    this.isLoading = true;
    this.selectedRegion = region;

    this.service.searchByRegion(region)
      .subscribe(response => {
        this.countries = response;
        this.isLoading = false;
    })
  }
}
