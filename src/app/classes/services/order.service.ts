import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Order } from 'src/app/routes/Checkout/interfaces/order.interface';
import { Basket, BskItem } from '../interfaces/basket.interface';
import { Result } from '../result';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { environment } from 'src/environments/environment.dev';
import { ToastrService } from 'ngx-toastr';
// import { LocalStorageService } from '../local-storage';
const bskInit: Basket = {
  basketItems: new Array<BskItem>(),
  totalCount: 0,
  totalPrice: 0,
};
@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService<any> {
  basket = new BehaviorSubject(bskInit);
  basket$ = this.basket.asObservable();
  order: BehaviorSubject<Order>;
  constructor(
    http: HttpClient,
    toastr: ToastrService,
    private auth: AuthService //private localStorage: LocalStorageService
  ) {
    super(http, toastr);
    // if (this.localStorage.getItem('basketItems')) {
    //   this.fillBasket();
    // }
  }
  override post(path: string, body: any): Observable<Result<{}>> {
    const token = this.auth._user.token;
    return this.http
      .post<Result<{}>>(`${environment.apiUrl + path}`, body, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(
        map((res) => {
          if (res.success) {
            this.toastSuccess(res.message);
          } else {
            this.toastError(res.message);
          }
          return res;
        })
      );
  }
  pushToBSK(item: BskItem) {
    let bskItems = this.basket.value.basketItems;
    let productId = bskItems.find((it) => it.tableType == 6)?.id;
    let itemIndex = bskItems.findIndex(
      (it) => it.rowID == item.rowID && item.tableType == it.tableType
    );

    if (itemIndex == -1) {
      if (productId == 1) {
        this.basket.value.basketItems = this.basket.value.basketItems.filter(
          (it) => it.tableType == 6
        );
      }
      this.basket.value.basketItems.push(item);
    } else {
      return;
      // this.basket.value.basketItems[index].count += 1;
    }
    this.basket.value.totalPrice = item.price;
  }
  removeFromBSK(item: BskItem) {
    let index = this.basket.value.basketItems.findIndex(
      (it) => it.rowID == item.rowID && item.tableType == it.tableType
    );

    if (this.basket.value.basketItems[index].count > 1) {
      this.basket.value.basketItems[index].count -= 1;
    } else {
      this.basket.value.basketItems.splice(index, 1);
    }
    this.basket.value.totalPrice -= item.price;
  }
  override get(path: string): Observable<Result<any>> {
    const token = this.auth._user.token;
    return this.http.get<Result<any>>(`${environment.apiUrl + path}`, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  // fillBasket() {
  //   let item = JSON.parse(this.localStorage.getItem('basketItems')!);
  //   this.basket.subscribe((it) => (it.basketItems = item));
  // }
}
