import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, lastValueFrom, map } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { OrderService } from 'src/app/classes/services/order.service';
import { Utils } from 'src/app/classes/utils';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.scss'],
})
export class PaymentResultComponent {
  isMoblie: boolean;
  code: string = '';
  id: string = '1';
  userObserver$: Observable<any>;
  async ngOnInit() {
    this.updateDeviceValue();
    this.userObserver$.subscribe({
      next: async (val) => {
        if (val.token !== '') {
          let res = await this.getPaymentRes();
          if (typeof res == 'string') {
            this.code = res;
          }
        }
      },
    });
  }
  constructor(
    private _auth: AuthService,
    private _orderService: OrderService,
    private _state: ActivatedRoute
  ) {
    this.userObserver$ = this._auth.userSubject.asObservable();
    this._state.url.subscribe((it) => (this.id = it[1].path));
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isMobileL()) this.isMoblie = true;
      else this.isMoblie = false;
    }
  }
  get profilePanel() {
    let href = 'https://panel.iraniexpert.com/#/checkUserPermission?token=';
    let userToken = this._auth._user.token;
    href += userToken;
    return href;
  }
  async getPaymentRes() {
    const apiRes = this._orderService.get(`OrderNew/${this.id}`).pipe(
      map((it) => {
        if (it.success) {
          this._auth.userSubject.complete();
          return it.data.orderDetails.code;
        } else {
          return it.success;
        }
      })
    );
    return lastValueFrom(apiRes);
  }
}
