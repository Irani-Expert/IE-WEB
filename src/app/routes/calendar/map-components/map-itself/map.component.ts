import {
  Component,
  ComponentRef,
  HostListener,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapCountryComponent } from '../map-country/map-country.component';
import countries from 'src/assets/custom.geo.json';
import countries_coordiantes from 'src/assets/countries-coordinates.json';
//@ts-ignore
import * as L from 'leaflet';
import { map_config } from './map_config';
import { icon_config } from './icon_config';
import { Country } from '../map-country/country';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { leaflet_config } from './leaflet_config';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  map: any;
  @ViewChild('countriesComponentContainer', { read: ViewContainerRef })
  countriesComponentContainer: ViewContainerRef;
  dynamicComponentRef: ComponentRef<MapCountryComponent>;
  weekends: boolean;
  constructor(private _ecoCalService: EcoCalService) {}
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new L.map('map', leaflet_config);
    this.map.doubleClickZoom.disable();
    this.countriesLayer(); //Create Countries Layer

    let today = new Date().getDay();
    if (today == 6 || today == 7) {
      // Sunday and Saturday
      this.weekends = true;
    } else {
      this.weekends = false;
      //Other Days of Week
      this.createMarker(); // Create Markers on Map
    }
  }

  createMarkerPopupContent(countryName: string): L.Popup {
    const popup = L.popup();
    this.dynamicComponentRef =
      this.countriesComponentContainer.createComponent(MapCountryComponent);

    let country = {} as Country;
    country.code = countryName;
    this.dynamicComponentRef.instance.apiData = country;
    let div = document.createElement('div');
    div.appendChild(this.dynamicComponentRef.location.nativeElement);
    popup.setContent(div);

    // Detach the component on popup close (optional for performance)
    popup.on('close', () => {
      this.dynamicComponentRef.destroy();
    });
    return popup;
  }

  createMarker() {
    let icon = L.icon(icon_config);
    this._ecoCalService.mapEvents.value.forEach((it) => {
      if (
        it.highValues !== 0 ||
        it.lowValues !== 0 ||
        it.moderateValues !== 0 ||
        it.noneValues !== 0
      ) {
        let coordinates = countries_coordiantes.find(
          (country) => country.name == it.code
        )?.coordinates;
        if (coordinates) {
          let marker = L.marker(coordinates, {
            icon: icon,
          }).addTo(this.map);

          let popup = this.createMarkerPopupContent(it.code);

          marker.bindPopup(popup);
        }
      }
    });
  }

  countriesLayer() {
    L.geoJSON(countries, {
      style: map_config,
    }).addTo(this.map);
  }

  @HostListener('window:resize')
  onResize() {
    this.map.invalidateSize();
  }
}
