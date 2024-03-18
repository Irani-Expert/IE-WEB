import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import countries from 'src/assets/custom.geo.json';
import countries_coordiantes from 'src/assets/countries-coordinates.json';
//@ts-ignore
import * as L from 'leaflet';
import { MapCountryComponent } from '../map-country/map-country.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  map: any;
  popupContent: any;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;
  dynamicComponentRef: ComponentRef<MapCountryComponent>;
  constructor() {}
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new L.map('map', {
      center: [51.505, -0.09],
      draggable: false,
      scrollWheelZoom: false,
      zoomControl: false,
      dragging: false,
      zoomDelta: 0.25,
      zoomSnap: 0,
      zoom: 1.25,
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
      iconSize: [10, 10],
    });
    countries_coordiantes.forEach((it) => {
      let marker = L.marker(it.coordinates, { icon: customIcon }).addTo(
        this.map
      );
      this.popupContent = this.createCustomPopupContent();
      marker.bindPopup(this.popupContent);
    });

    L.geoJSON(countries, {
      style: myStyle,
    })
      .bindPopup((layer: any) => {
        return layer.feature.properties.name_fa;
      })
      .addTo(this.map);
  }

  createCustomPopupContent(): L.Popup {
    const popup = L.popup();
    this.dynamicComponentRef = this.dynamicComponentContainer.createComponent(
      MapCountryComponent // Pass your dynamic component class directly
    );

    const div = document.createElement('div');
    div.appendChild(this.dynamicComponentRef.location.nativeElement);
    popup.setContent(div);

    // Detach the component on popup close (optional for performance)
    popup.on('close', () => {
      this.dynamicComponentRef.destroy();
    });
    return popup;
  }
}
