import { Injectable } from '@angular/core';
import { IFilterGroup } from './models/filter.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  static filterItems = new BehaviorSubject<IFilterGroup[]>([]);
  static filterItems$: Observable<IFilterGroup[]> = new Observable(
    FilterService.filterItems.subscribe
  );
  constructor() {
    // FilterService.filterItems$ = FilterService.filterItems.asObservable();
  }
  // navigation component has subscribed to this Observable
}
