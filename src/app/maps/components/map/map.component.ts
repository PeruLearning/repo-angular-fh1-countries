import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { LatLong } from '../../interfaces/lat-long.interface';
import * as leaflet from 'leaflet';


@Component({
  selector: 'maps-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {

  public mapId: string;
  public isMapReady: boolean = false;

  @Input()
  public zoomLevel: number = 10;

  @Input()
  public originalPoint: LatLong = { latitude: 0, longitude: 0 };

  constructor() {
    this.mapId = this.generateGuid();
  }
  ngAfterViewInit(): void {
    this.createMap(this.originalPoint, this.zoomLevel);
  }

  //@Output()
  // public onCreatedMap: EventEmitter<MapComponent> = new EventEmitter();

  private createMap(point: LatLong, initialZoomLevel: number, maxZoomLevel: number = 19) {

    let map = leaflet.map(this.mapId).setView([point.latitude, point.longitude], initialZoomLevel);

    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: maxZoomLevel,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    console.log(`map ${this.mapId} created.`);
  }

  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
