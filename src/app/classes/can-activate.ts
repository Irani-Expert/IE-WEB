import { Injectable } from '@angular/core';
import { OrderService } from './services/order.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ModalService } from '../shared/modal/services/modal.service';
import { HeaderLayoutComponent } from '../components/header-layout/header-layout.component';
import { LocalStorageService } from './local-storage';

@Injectable({
  providedIn: 'root',
})
export class CanActivate {
  snapShot: any;
  // HeaderLayoutComponent
  constructor(private router: Router, private modal: ModalService) {}

  canActivate() {
    // let item = this.orderService.basket.value;
    const userSavedBsk = localStorage.getItem('user_basket');
    const user = localStorage.getItem('info');
    if (!user) {
      this.modal.open().subscribe({
        complete: () => {
          HeaderLayoutComponent.modalStatus = false;
        },
      });
      HeaderLayoutComponent.modalStatus = true;
      HeaderLayoutComponent.modalView = 'login';
      return false;
    } else {
      if (!userSavedBsk) {
        this.router.navigateByUrl('shop/atm-expert');
        return false;
      }
      return true;
    }
  }
}
