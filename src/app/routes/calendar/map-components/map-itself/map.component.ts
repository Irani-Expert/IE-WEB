import {
  Component,
  ComponentRef,
  HostListener,
  ViewChild,
  ViewContainerRef,
  afterNextRender,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapCountryComponent } from '../map-country/map-country.component';
import countries from 'src/assets/custom.geo.json';
import countries_coordiantes from 'src/assets/countries-coordinates.json';
import { map_config } from './map_config';
import { icon_config } from './icon_config';
import { Country } from '../map-country/country';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { leaflet_config } from './leaflet_config';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  map: any;
  L: any;
  @ViewChild('countriesComponentContainer', { read: ViewContainerRef })
  countriesComponentContainer: ViewContainerRef;
  dynamicComponentRef: ComponentRef<MapCountryComponent>;
  weekends: boolean = false;
  constructor(private _ecoCalService: EcoCalService) {
    afterNextRender(() => {
      //@ts-ignore
      this.L = require('leaflet');
      if (AppComponent.isBrowser.value) {
        this.initMap();
      }
    });
  }

  private initMap(): void {
    this.map = new this.L.map('map', leaflet_config);
    this.map.doubleClickZoom.disable();

    this.countriesLayer(); //Create Countries Layer

    this.createMarker(); // Create Markers on Map
  }

  createMarkerPopupContent(countryName: string) {
    const popup = this.L.popup();
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
    let icon = this.L.icon(icon_config);
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
          let marker = this.L.marker(coordinates, {
            icon: icon,
          }).addTo(this.map);

          let popup = this.createMarkerPopupContent(it.code);

          marker.bindPopup(popup);

          // marker.on('mouseover', (e: any) => {
          //   marker.bindTooltip(e);
          //   console.log(e);
          // });
        }
      }
    });
  }

  countriesLayer() {
    this.L.geoJSON(countries, {
      style: map_config,
    }).addTo(this.map);
  }

  @HostListener('window:resize')
  onResize() {
    this.map.invalidateSize();
  }
}
