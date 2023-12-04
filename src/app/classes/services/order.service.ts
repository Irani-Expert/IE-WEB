import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/routes/Checkout/interfaces/order.interface';
import { Basket, BskItem } from '../interfaces/basket.interface';
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
    http: HttpClient
    // , private localStorage: LocalStorageService
  ) {
    super(http);
    // if (this.localStorage.getItem('basketItems')) {
    //   this.fillBasket();
    // }
  }
  // fillBasket() {
  //   let item = JSON.parse(this.localStorage.getItem('basketItems')!);
  //   this.basket.subscribe((it) => (it.basketItems = item));
  // }
}
