import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  public isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CountriesService
  ) { }

  public ngOnInit(): void {
    this.isLoading = true;
    this.activatedRoute.params.pipe(
        switchMap(({ id }) => this.service.getByAlphaCode(id))
      ).subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }

        this.country = country;
        this.isLoading = false;
        return;
      }
    );
  }
}
