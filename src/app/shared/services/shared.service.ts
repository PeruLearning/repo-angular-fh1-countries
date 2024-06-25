import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _menuItems: MenuItem[] = [
    { name: 'By capital', url: '/countries/by-capital' },
    { name: 'By country', url: '/countries/by-country' },
    { name: 'By region', url: '/countries/by-region' }
  ]

  constructor() { }

  public getMenuItems(): Observable<MenuItem[]> {
    return new Observable<MenuItem[]>((subscriber) => {
      subscriber.next(this._menuItems);
      subscriber.complete();
    });
  }
}
