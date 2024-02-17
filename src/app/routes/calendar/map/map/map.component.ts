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
  // events = [
  //   {
  //     name: 'CAN',
  //     radius: 5,
  //     centered: 'CAN',
  //   },
  // ];
  // map: any;
  isLoading = true;
  countries = new Array<Country>();

  constructor(private _ecoCalService: EcoCalService) {
    AppComponent.changeMainBg('creamy');
  }
  async ngOnInit() {
    if (AppComponent.isBrowser.value) {
      // this.initMap();
    }
    this.countries = (await this._ecoCalService.getCountriesByEvents()).data!;
    this.isLoading = false;
  }

  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  // initMap() {
  // }

  // addCircles() {
  //   const bubbles = document.getElementsByClassName('bubbles');
  //   const bubblesArray = document.getElementsByClassName('datamaps-bubble');
  //   // const bubble = document.getElementById("bubble");
  //   console.log(bubblesArray[0].attributes);

  //   for (let i = 0; i < bubblesArray.length; i++) {
  //     const circle_0 = this.drawCircle(
  //       0.5,
  //       5,
  //       bubblesArray[i].attributes[1].value,
  //       bubblesArray[i].attributes[2].value,
  //       0
  //     );
  //     const circle_1 = this.drawCircle(
  //       1,
  //       9,
  //       bubblesArray[i].attributes[1].value,
  //       bubblesArray[i].attributes[2].value,
  //       0.2
  //     );

  //     const circle_2 = this.drawCircle(
  //       1,
  //       11,
  //       bubblesArray[i].attributes[1].value,
  //       bubblesArray[i].attributes[2].value,
  //       0.6
  //     );
  //     const circle_3 = this.drawCircle(
  //       1,
  //       14,
  //       bubblesArray[i].attributes[1].value,
  //       bubblesArray[i].attributes[2].value,
  //       0.8
  //     );
  //     bubbles[0].appendChild(circle_0);
  //     bubbles[0].appendChild(circle_1);
  //     bubbles[0].appendChild(circle_2);
  //     bubbles[0].appendChild(circle_3);
  //   }
  // }
  // drawCircle(
  //   stokeWidth: string | number,
  //   radius: number,
  //   cx: string,
  //   cy: string,
  //   animationDelay: number
  // ) {
  //   let circle = document.createElementNS(
  //     'http://www.w3.org/2000/svg',
  //     'circle'
  //   );
  //   circle.setAttribute('r', radius.toString());
  //   circle.setAttribute('stroke', 'blue');
  //   circle.setAttribute('stroke-width', stokeWidth.toString());
  //   circle.setAttribute('fill', 'transparent');

  //   circle.classList.add('custom-bubble');
  //   circle.setAttribute('cx', cx); // Set position
  //   circle.setAttribute('cy', cy);
  //   circle.style.setProperty('--radius', `${radius}`);
  //   circle.style.setProperty('--radius-max', `${radius + 4}`);
  //   circle.style.setProperty('--animation-delay', `${animationDelay}s`);
  //   return circle;
  // }
}
