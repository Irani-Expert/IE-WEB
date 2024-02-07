import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapCountryComponent } from '../map-country/map-country.component';
import { AppComponent } from 'src/app/app.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { Country } from '../map-country/country';
import { MapClockComponent } from '../map-clock/map-clock.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, MapCountryComponent, MapClockComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  isLoading = true;
  countries = new Array<Country>();

  constructor(private _ecoCalService: EcoCalService) {
    AppComponent.changeMainBg('creamy');
  }
  async ngOnInit() {
    this.countries = (await this._ecoCalService.getCountriesByEvents()).data!;
    this.isLoading = false;
  }
}
