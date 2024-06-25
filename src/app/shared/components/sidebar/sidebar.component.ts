import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menuItem.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  private _menuItems: MenuItem[] = [];

  constructor(private service: SharedService) {}

  public ngOnInit(): void {
    this.service.getMenuItems().subscribe((items) => {
      this._menuItems = items;
    });
  }

  public get menuItems(): MenuItem[] {
    return [...this._menuItems];
  }

}
