import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// let time = new Date();
enum Cities {
  'NYC' = 'New York',
  'LDN' = 'London',
  'TKY' = 'Tokyo',
  'SYD' = 'Sydney',
}
// enum TimeZone {
//   'NYC' = time.getUTCHours(),
//   'LDN' = 'London',
//   'TKY' = 'Tokyo',
//   'SYD' = 'Sydney',
// }
@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-clock.component.html',
  styleUrls: ['./map-clock.component.scss'],
})
export class MapClockComponent {
  timer;
  currentTime: Date = new Date();
  activeTimeZone = {
    city_1: Cities.NYC,
    city_2: Cities.LDN,
  };
  timezones = [
    {
      name: Cities.NYC,
      time: '4:03 AM',
    },
    {
      name: Cities.LDN,
      time: '9:03 AM',
    },
    {
      name: Cities.TKY,
      time: '6:03 PM',
    },
    {
      name: Cities.SYD,
      time: '8:03 PM',
    },
  ];
  get markerPosition() {
    switch (this.activeTimeZone.city_1) {
      case Cities.NYC:
        return '20%';
      case Cities.LDN:
        return '90%';
      case Cities.TKY:
        return '160%';
      case Cities.SYD:
        return '20%';
      default:
        return '20%';
    }
  }
  constructor() {
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestory() {
    clearInterval(this.timer);
  }
}
