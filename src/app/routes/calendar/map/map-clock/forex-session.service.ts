import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForexSessionService {
  constructor() {}

  getCurrentSession(): string {
    const date = new Date();
    const hour = date.getHours();

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
}
