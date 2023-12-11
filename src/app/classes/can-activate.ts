import { Injectable } from '@angular/core';
import { OrderService } from './services/order.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ModalService } from '../shared/modal/services/modal.service';
import { HeaderLayoutComponent } from '../components/header-layout/header-layout.component';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root',
})
export class CanActivate {
  // HeaderLayoutComponent
  constructor(
    private orderService: OrderService,
    private router: Router,
    private modal: ModalService
  ) {}

  canActivate() {
    let item = this.orderService.basket.value;
    if (item.basketItems.length == 0) {
      this.router.navigateByUrl('shop/atm');
      return false;
    }
    if (!AuthService.loggedIn.value) {
      Utils.scrollTopWindow();
      this.modal.open().subscribe({
        complete: () => {
          HeaderLayoutComponent.modalStatus = false;
        },
      });
      HeaderLayoutComponent.modalStatus = true;
      HeaderLayoutComponent.modalView = 'login';

      // HeaderLayoutComponent.modalView = 'login';
      // HeaderLayoutComponent.modalStatus = true;
      return false;
    } else {
      return true;
    }
  }
}
