import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private persianRoutename = new BehaviorSubject('data');
  //create new Live data
  liveRoute = this.persianRoutename.asObservable();
  changePersianRouteName(val: any) {
    this.persianRoutename.next(val);
  }
  constructor() {}
}
