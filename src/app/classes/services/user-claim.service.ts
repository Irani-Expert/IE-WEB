import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../local-storage';
import { Favorite } from '../interfaces/favorite';
import {
  BehaviorSubject,
  Observable,
  catchError,
  lastValueFrom,
  map,
} from 'rxjs';
import { Result } from '../result';
import { environment } from 'src/environments/environment.dev';
import { PageInterface } from '../page.model';

@Injectable({
  providedIn: 'root',
})
export class UserClaimService extends BaseService<
  PageInterface<Favorite[]> | Favorite | number
> {
  override headers: HttpHeaders = new HttpHeaders({
    accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    Pragma: 'no-cache',
    Expires: '0',
    'Cache-Control':
      'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
  });
  favoriteSubject = new BehaviorSubject<Favorite[]>(new Array<Favorite>());
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

  removeOnLogOut() {
    this.favoriteSubject.next(new Array<Favorite>());
  }

  async getFavs(userId: number) {
    const request = this.get(
      'AspNetUserClaim',
      new HttpParams({
        fromObject: { pageIndex: 0, claimType: 0, userId: userId },
      })
    );
    const { data, success } = await lastValueFrom(request);

    if (data) this.favoriteSubject.next(data.items!);

    return success;
  }

  checkFav(rowID: number, tableType: number) {
    let favs = this.favoriteSubject.value;

    let index = favs.findIndex(
      (it) => it.rowID == rowID && it.tableType == tableType
    );
    if (index == -1) {
      return 0;
    } else {
      return favs[index].id;
    }
  }

  async removeFav(id: number) {
    const req = this.delete(`AspNetUserClaim/${id}`).pipe(
      map((it) => {
        let favs = this.favoriteSubject.value;
        let index = favs.findIndex((it) => it.id == id);
        favs.splice(index, 1);
        this.favoriteSubject.next(favs);
        return it;
      })
    );
    return (await lastValueFrom(req)).success;
  }

  async addFav(rowID: number, tableType: number, userID: number) {
    let favorite: Favorite = {
      claimType: 0,
      createDate: null,
      rowID: rowID,
      tableType: tableType,
      userId: userID,
      id: 0,
    };
    const req = this.post('AspNetUserClaim', favorite).pipe(
      map((it) => {
        let favs = this.favoriteSubject.value;
        favorite.id = it.data!;
        favs.push(favorite);
        this.favoriteSubject.next(favs);
        return it;
      })
    );
    return (await lastValueFrom(req)).success;
  }

  // Overrides

  override get(
    path: string,
    params?: HttpParams | undefined
  ): Observable<Result<PageInterface<Favorite[]>>> {
    return this.http
      .get<Result<PageInterface<Favorite[]>>>(`${environment.apiUrl + path}`, {
        headers: this.headers,
        params: params,
      })
      .pipe(catchError(this.handleError));
  }

  override post(path: string, body: any): Observable<Result<number>> {
    return this.http
      .post<Result<any>>(`${environment.apiUrl + path}`, body, {
        headers: this.headers,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
