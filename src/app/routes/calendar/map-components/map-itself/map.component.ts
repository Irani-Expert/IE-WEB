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

    var myLines = [
      {
        type: 'LineString',
        coordinates: [
          [-100, 40],
          [-105, 45],
          [-110, 55],
        ],
      },
      {
        type: 'LineString',
        coordinates: [
          [-105, 40],
          [-110, 45],
          [-115, 55],
        ],
      },
    ];
    var myStyle = {
      color: '#ff7800',
      weight: 0.2,
      fillColor: '#ff7800',

    };
    L.geoJSON(countries, {
      style: myStyle,
      zoomControl: false,
      scrollWheelZoom: false,
      draggable : false,
    })
      .bindPopup(function (layer: any) {
        return layer.feature.properties.name;
      })
      .addTo(this.map);
    L.Projection.Mercator()

  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      draggable : false,
      scrollWheelZoom: false,
      zoomControl: false,
      zoom:2,
    });

  }
}
