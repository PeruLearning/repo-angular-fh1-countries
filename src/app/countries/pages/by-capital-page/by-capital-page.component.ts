import { Component } from '@angular/core';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  searchByCapital(term: string): void {
    debugger;
    console.log('Desde by-capital page');
    console.log({term});
  }
}
