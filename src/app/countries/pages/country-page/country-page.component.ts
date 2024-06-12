import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CountriesService
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.service.getByAlphaCode(id))
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }

        this.country = country;
        return;
    })
  }
}
