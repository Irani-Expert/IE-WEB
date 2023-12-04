import { Injectable } from '@angular/core';
import { OrderService } from './services/order.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivate {
  constructor(private orderService: OrderService, private router: Router) {}
  canActivate() {
    let item = this.orderService.basket.value;
    if (item.basketItems.length == 0 || !AuthService.loggedIn.value) {
      this.router.navigateByUrl('shop/atm');
      return false;
    } else {
      return true;
    }
  }
}
