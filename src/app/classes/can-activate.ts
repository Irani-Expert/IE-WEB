import { Injectable } from '@angular/core';
import { OrderService } from './services/order.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ModalService } from '../shared/modal/services/modal.service';
import { HeaderLayoutComponent } from '../components/header-layout/header-layout.component';
import { RedirectorService } from './services/redirector.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivate {
  snapShot: any;
  // HeaderLayoutComponent
  constructor(
    private orderService: OrderService,
    private router: Router,
    private x: ActivatedRoute,
    private _redirectiorService: RedirectorService,
    private modal: ModalService
  ) {
    const snapshot: ActivatedRouteSnapshot = this.x.snapshot;
    this.snapShot = snapshot;
  }

  canActivate() {
    let item = this.orderService.basket.value;
    if (item.basketItems.length == 0) {
      this.router.navigateByUrl('');
      return false;
    }
    if (!AuthService.loggedIn.value) {
      this.modal.open().subscribe({
        complete: () => {
          HeaderLayoutComponent.modalStatus = false;
        },
      });
      HeaderLayoutComponent.modalStatus = true;
      HeaderLayoutComponent.modalView = 'login';
      return false;
    } else {
      return true;
    }
  }
  urlRedirection() {
    // this.router.events.pipe(takeUntil(new Subject())).subscribe({
    //   next: (value) => {
    //     if (value instanceof Scroll) {
    //       if (value.routerEvent instanceof NavigationSkipped) {
    //        let event = value.routerEvent;
    //         if(event.url.includes('blog')) {
    //           return false
    //         } else {
    //           return true
    //         }
    //       }
    //     }
    //   },
    // });
    this._redirectiorService;
  }
}
