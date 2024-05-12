import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { Country } from '../map-country/country';
import { MapClockComponent } from '../map-clock/map-clock.component';
import { MapComponent } from '../map-itself/map.component';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [CommonModule, MapClockComponent, MapComponent],
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapContainerComponent {
  isLoading = true;
  countries = new Array<Country>();

  constructor(private _ecoCalService: EcoCalService) {
    AppComponent.changeMainBg('creamy');
  }
  async ngOnInit() {
    if (AppComponent.isBrowser.value) {
      if (window) {
        console.log('Appication is on Browser');
        this.countries = (
          await this._ecoCalService.getCountriesByEvents()
        ).data!;
        this.isLoading = false;
      }
    }
  }
  ngAfterViewInit() {}
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }
}
