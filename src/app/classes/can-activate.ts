import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ModalService } from '../shared/modal/services/modal.service';
import { HeaderLayoutComponent } from '../components/header-layout/header-layout.component';

@Injectable({
  providedIn: 'root',
})
export class CanActivate {
  snapShot: any;
  // HeaderLayoutComponent
  constructor(
    private router: Router,
    private modal: ModalService,
    private _authService: AuthService
  ) {}

  canActivate() {
    // let item = this.orderService.basket.value;
    const userSavedBsk = localStorage.getItem('user_basket');
    let user = localStorage.getItem('info');
    if (!user) {
      if (this._authService._user.token !== '') {
        user = JSON.stringify(this._authService._user);
        return true;
      } else {
        this.router.navigateByUrl('shop/atm-expert');
        this.modal.open().subscribe({
          complete: () => {
            HeaderLayoutComponent.modalStatus = false;
          },
        });
        HeaderLayoutComponent.modalStatus = true;
        HeaderLayoutComponent.modalView = 'login';
        return false;
      }
    } else {
      if (!userSavedBsk) {
        this.router.navigateByUrl('shop/atm-expert');
        return false;
      }
      return true;
    }
  }
}
