import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from './country';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-map-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-country.component.html',
  styleUrls: ['./map-country.component.scss'],
})
export class MapCountryComponent {
  countries = new Array<Country>();
  country: Country = { active: false, code: 'ca', id: 1, name: '' };
  constructor(private _ecoCalService: EcoCalService) {}
  async ngAfterViewInit() {
    AppComponent.changeMainBg('creamy');
    this.countries = (await this._ecoCalService.getCountries()).data?.items!;
    console.log(this.countries);
    this.country = { ...this.country, ...this.countries[0] };
    console.log(this.country);
  }
}
