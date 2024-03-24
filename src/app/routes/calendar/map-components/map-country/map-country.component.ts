import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from './country';
import { ImportanceComponent } from '../../importance/importance.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
const countryInit: Country = { active: false, code: '', id: 0, name: '' };
@Component({
  selector: 'app-map-country',
  standalone: true,
  imports: [CommonModule, ImportanceComponent],
  templateUrl: './map-country.component.html',
  styleUrls: ['./map-country.component.scss'],
})
export class MapCountryComponent {
  apiData: Country;
  country = countryInit;
  constructor(private _ecoCalService: EcoCalService) {}

  async ngOnInit() {}
  ngAfterViewInit() {
    this.apiData = this._ecoCalService.getCountryForMapByCode(
      this.apiData.code
    );
    this.setCountry();
  }
  // getImportanceColor() {

  // }
  setCountry() {
    this.country = Object.assign({}, this.apiData);

    this.country.events = {
      highValues: { count: this.country.highValues!, color: '#FF5B5B' },
      moderateValues: { count: this.country.moderateValues!, color: '#FFD95B' },
      lowValues: { count: this.country.lowValues!, color: '#DFFF00' },
      noneValues: { count: this.country.noneValues!, color: '#FCF1F1' },
    };
  }
  setEventImportance() {}
}
