import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as moment from 'moment-timezone';
import { City } from './city.interface';
import { ForexSessionService } from './forex-session.service';
// interface WorldClock  {
//   nyc: string
//   london: string
// }

// let time = new Date();
enum Cities {
  'NYC' = 'New York',
  'LDN' = 'London',
  'TKY' = 'Tokyo',
  'SYD' = 'Sydney',
}
enum TimeZone {
  'NYC' = 'America/New_York',
  'LDN' = 'Europe/London',
  'TKY' = 'Asia/Tokyo',
  'SYD' = 'Australia/Sydney',
}
@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-clock.component.html',
  styleUrls: ['./map-clock.component.scss'],
  providers: [ForexSessionService],
})
export class MapClockComponent {
  timer;
  changing = false;
  currentTime: Date = new Date();
  activeTimeZone = {
    city_1: Cities.NYC.valueOf(),
    city_2: Cities.LDN.valueOf(),
  };
  sessions: City[] = [
    {
      name: Cities.LDN.valueOf(),
      timezone: TimeZone.LDN.valueOf(),
    },
    {
      name: Cities.NYC.valueOf(),
      timezone: TimeZone.NYC.valueOf(),
    },
    {
      name: Cities.SYD.valueOf(),
      timezone: TimeZone.SYD.valueOf(),
    },
    {
      name: Cities.TKY.valueOf(),
      timezone: TimeZone.TKY.valueOf(),
    },
  ];

  constructor(private _forexSessionService: ForexSessionService) {
    this.detectForexSession();
    let doubled = this.sessions.concat(this.sessions);

    this.sessions = doubled;
    console.log(this.sessions);

    this.timer = setInterval(
      () => {
        this.currentTime = new Date();
      },
      600000 //Stands for One Minuet
    );
  }

  ngOnDestory() {
    clearInterval(this.timer);
  }

  activeZone(city_1: City, city_2: City) {
    this.changing = true;
    this.activeTimeZone.city_1 = city_1.name;
    this.activeTimeZone.city_2 = city_2.name;
    // if (AppComponent.isBrowser.value) {
    //   const element = document.getElementsByClassName('clock-item')!;
    //   for (let index = 0; index < element.length; index++) {
    //     element[index].classList.add('scroll');
    //   }
    setTimeout(() => {
      this.sessions = [...this.sessions.slice(1), this.sessions[0]];
      this.changing = false;
    }, 1500);
    // element.classList.add('scroll');
    // }
  }

  getTime(timezone: string) {
    return moment().tz(timezone).format('HH:MM');
  }

  detectForexSession() {
    const session = this._forexSessionService.getCurrentSession();
    console.log(`Current Forex session is: ${session}`);
  }
}
