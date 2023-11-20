import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { BannerInterface } from '../interfaces/banner.model';
import { PageInterface } from '../page.model';

@Injectable({
  providedIn: 'root',
})
export class BannerService extends BaseService<
  PageInterface<BannerInterface[]>
> {
  _paginatedBanner: BehaviorSubject<PageInterface<BannerInterface[]> | null> =
    new BehaviorSubject<PageInterface<BannerInterface[]> | null>(null);
  constructor(http: HttpClient) {
    super(http);
  }
  get _items() {
    return this._paginatedBanner.value;
  }
  async getBanners() {
    const apiResult = this.get('Banner').pipe(
      map((res) => {
        if (res.success) {
          this._paginatedBanner.next(res.data!);
        }
        return res.success;
      })
    );
    return apiResult;
  }
}
