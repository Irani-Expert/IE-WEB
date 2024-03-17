import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import countries from 'src/assets/custom.geo.json';
//@ts-ignore
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new L.map('map', {
      center: [51.505, -0.09],
      draggable : false,
      scrollWheelZoom: false,
      zoomControl: false,
      dragging: false,
      zoomDelta: 0.25,
      zoomSnap: 0,
      zoom:1.25,
      tap: false,
    });
    this.map.doubleClickZoom.disable(); 
    var myStyle = {
      color: '#ffffff',
      weight: 1,
      opacity: 1,
      fillOpacity: 1,
      fillColor: '#e2e2e2',

    };
    const customIcon = L.divIcon({
      className: 'custom-bubble',
     
    });
    L.marker([51.5, -0.09],{icon: customIcon}).addTo(this.map);
    L.geoJSON(countries, {
      style: myStyle,
    })
      .bindPopup(function (layer: any) {
        return layer.feature.properties.name;
      })
      .addTo(this.map);
  }
}
