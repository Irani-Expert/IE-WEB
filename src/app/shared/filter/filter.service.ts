import { Injectable } from '@angular/core';
import { IFilterGroup } from './models/filter.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService<T> {
  static filterItems = new BehaviorSubject<IFilterGroup[]>([]);
  static filterItems$: Observable<IFilterGroup[]> = new Observable(
    FilterService.filterItems.subscribe
  );
  filterModelSubject: BehaviorSubject<T>;
  get filterModelValue() {
    return this.filterModelSubject.value;
  }
}
