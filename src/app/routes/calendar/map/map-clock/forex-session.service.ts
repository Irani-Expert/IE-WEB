import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForexSessionService {
  private marketHours: any = {
    Sydney: { open: '21:00', close: '06:00' },
    Tokyo: { open: '00:00', close: '09:00' },
    London: { open: '07:00', close: '16:00' },
    'New York': { open: '13:00', close: '22:00' },
  };
  sessionsSubject = new BehaviorSubject<string[] | null>(this.getOpenMarket());
  checkEveryMinute: NodeJS.Timer;
  constructor() {
    this.checkEveryMinute = setInterval(() => {
      this.sessionsSubject.next(this.getOpenMarket());
    }, 60000);
  }

  getCurrentSession(): string {
    const date = new Date();
    const hour = date.getUTCHours();

    if ((hour >= 22 && hour <= 24) || (hour >= 0 && hour < 7)) {
      return 'Sydney';
    } else if (hour >= 6 && hour < 15) {
      return 'Tokyo';
    } else if (hour >= 8 && hour < 17) {
      return 'London';
    } else if (hour >= 13 && hour < 22) {
      return 'New York';
    } else {
      return 'No active session';
    }
  }
  closeTimer() {
    this.sessionsSubject.complete();
    clearInterval(this.checkEveryMinute);
  }

  isOpen(market: any): boolean {
    let now = new Date();
    let currentTime =
      now.getUTCHours() +
      ':' +
      (now.getUTCMinutes() < 10 ? '0' : '') +
      now.getUTCMinutes();

    let [openHour, openMinute] = this.marketHours[market].open
      .split(':')
      .map(Number);
    let [closeHour, closeMinute] = this.marketHours[market].close
      .split(':')
      .map(Number);
    let [currentHour, currentMinute] = currentTime.split(':').map(Number);

    let open = openHour * 60 + openMinute;
    let close = closeHour * 60 + closeMinute;
    let current = currentHour * 60 + currentMinute;

    if (open < close) {
      return current >= open && current <= close;
    } else {
      return current >= open || current <= close;
    }
  }

  getOpenMarket() {
    let openMarkets = [];
    for (let market in this.marketHours) {
      if (this.isOpen(market)) {
        openMarkets.push(market);
      }
    }
    return openMarkets;
  }
}
