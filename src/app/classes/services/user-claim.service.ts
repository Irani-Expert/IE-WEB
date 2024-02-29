import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../local-storage';
import { Favorite } from '../interfaces/favorite';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserClaimService extends BaseService<any> {
  static favoriteSubject = new BehaviorSubject<Favorite[]>(
    new Array<Favorite>()
  );
  constructor(
    http: HttpClient,
    private toastr: ToastrService,
    private localStorage: LocalStorageService
  ) {
    super(http, toastr);
  }

  saveFavorites() {
    console.log(this.toastr);

    let favorites: Favorite[] = [
      {
        id: 0,
        claimType: 0,
        userId: 54,
        rowID: 1059,
        tableType: 1,
        createDate: '',
      },
    ];
    this.localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFavorites() {
    this.localStorage.removeItem('favorites');
  }

  getFavs() {
    const result = this.get(
      'AspNetUserClaim',
      new HttpParams({ fromObject: { pageIndex: 0, claimType: 0, userId: 54 } })
    );
    result.subscribe();
  }
}
