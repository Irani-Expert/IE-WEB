import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapCountryComponent } from '../map-country/map-country.component';
import { AppComponent } from 'src/app/app.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { Country } from '../map-country/country';
import { MapClockComponent } from '../map-clock/map-clock.component';
import { AddScriptService } from 'src/app/classes/services/add-script.service';
import { MapComponent } from '../map-itself/map.component';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [CommonModule, MapCountryComponent, MapClockComponent, MapComponent],
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapContainerComponent {
  isLoading = true;
  countries = new Array<Country>();

  constructor(
    private _ecoCalService: EcoCalService,
    private _addScript: AddScriptService
  ) {
    AppComponent.changeMainBg('creamy');
  }
  async ngOnInit() {
    if (AppComponent.isBrowser.value) {
      this._addScript.createScript('assets/js/worldmap.js');
      this._addScript.createScript('assets/js/mapdata.js');
      console.log('Appication is on Browser');
    }
    this.countries = (await this._ecoCalService.getCountriesByEvents()).data!;
    this.isLoading = false;
  }
  ngAfterViewInit() {}
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }
}
