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
  sessionObs$ = this._forexSessionService.sessionsSubject.asObservable();

  changing = false;
  currentTime: Date = new Date();
  activeTimeZone = {
    city_1: '',
    city_2: '',
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
    let doubled = this.sessions.concat(this.sessions);

    this.sessions = doubled;

    this.timer = setInterval(
      () => {
        // let date = new Date()
        this.currentTime = new Date();
      },
      60000 //Stands for One Minuet
    );
    let indexOfCity = this.sessions.findIndex(
      (it) => it.name == this._forexSessionService.sessionsSubject.value![0]
    );
    this.activeTimeZone.city_1 = this.sessions[indexOfCity].name;
    this.activeTimeZone.city_2 = this.sessions[indexOfCity + 1].name;
    this.sessions = [
      ...this.sessions.slice(indexOfCity),
      ...this.sessions.slice(0, indexOfCity),
    ];

    this.detectForexSession();
  }

  ngOnDestory() {
    this._forexSessionService.closeTimer();
    clearInterval(this.timer);
  }

  activeZone(city_1: string, city_2: string) {
    this.changing = true;
    this.activeTimeZone.city_1 = city_1;
    this.activeTimeZone.city_2 = city_2;
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
    return moment().tz(timezone).format('HH:mm');
  }

  detectForexSession() {
    this.sessionObs$.subscribe({
      next: (val) => {
        console.log(val);

        if (val![0] !== this.activeTimeZone.city_1) {
          let indexOfCity = this.sessions.findIndex((it) => it.name == val![0]);

          this.activeZone(
            this.sessions[indexOfCity].name,
            this.sessions[indexOfCity + 1].name
          );
        }
      },
    });
  }
}
