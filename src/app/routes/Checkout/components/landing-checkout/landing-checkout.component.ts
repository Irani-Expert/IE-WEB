import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputForm, InputInterface } from 'src/app/classes/input';
import { OrderService } from 'src/app/classes/services/order.service';
import { User } from 'src/app/shared/auth/user.interface';
import { Order } from '../../interfaces/order.interface';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { BskItem } from 'src/app/classes/interfaces/basket.interface';
import { Location } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';
interface PaymentMethod {
  id: number;
  title: string;
  cap?: string;
  img: string;
  imgAlt: string;
  active: boolean;
  disabled: boolean;
}
@Component({
  selector: 'app-landing-checkout',
  templateUrl: './landing-checkout.component.html',
  styleUrls: ['./landing-checkout.component.scss'],
})
export class LandingCheckoutComponent {
  // Order Model ------------------->
  today = '';
  selectedDate: '';

  orderModel: Order = new Order();
  basket: BskItem[] = new Array<BskItem>();
  // Order Model ------------------->
  acceptRules: boolean = false;
  // ClipBoard ------------------->
  ticked = false;
  showClipboardContent = false;
  timeOut: NodeJS.Timeout;
  copyToClipboard(el: HTMLInputElement) {
    if (!this.ticked) {
      this.ticked = true;
      this.showClipboardContent = !this.showClipboardContent;
      el.select();
      el.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(el.value);
    } else {
      this.showClipboardContent = !this.showClipboardContent;
    }
  }
  // ClipBoard ------------------->

  // Session of Payment ------------------->
  session: 0 | 1 = 0; // Form Details == 0 // TX ID AND FINAL SUBMIT == 1
  // Session ------------------->

  // Payemnt Methods -------------->
  paymentMethods: PaymentMethod[] = [
    {
      id: 1,
      title: 'USDT',
      cap: 'TRC20',
      img: 'assets/img/tether-min.webp',
      imgAlt: 'Tether-TRC20',
      active: true,
      disabled: false,
    },
    {
      id: 2,
      title: 'TC Pay',
      img: 'assets/img/tcpay.svg',
      imgAlt: 'TC-Pay',
      active: false,
      disabled: true,
    },
  ];
  selectedPaymentMethod = this.paymentMethods[0];

  changePaymentMethod(item: PaymentMethod) {
    if (this.selectedPaymentMethod == item || item.disabled) {
      return;
    } else {
      this.paymentMethods.forEach((it) => (it.active = false));
      item.active = true;
      this.selectedPaymentMethod = item;
    }
  }
  // Payemnt Methods -------------->

  // Tutorial ------------------->
  isShowDialog = false;

  showDialog(event: boolean) {
    this.isShowDialog = event;
  }
  // Tutorial ------------------->

  // LoggedUser ------------------->
  user: User;
  // LoggedUser ------------------->

  // Forms ------------->
  formsControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'شماره حساب',
      name: 'accountNumber',
      typeofVlaue: 'string',
      placeholder: 'شماره حساب متاتریدر 5 خود را وارد کنید',
      required: true,
    },
    {
      id: 2,
      label: 'تاریخ شروع لایسنس',
      name: 'startDate',
      typeofVlaue: 'string',
      required: true,
      placeholder: '12/09/2023',
    },
    {
      id: 3,
      label: 'کد تخفیف',
      name: 'discountCode',
      typeofVlaue: 'string',
      required: false,
      placeholder: 'کد تخفیف دارم',
    },
    {
      id: 3,
      label: 'پذیرش قوانین',
      name: 'acceptRules',
      typeofVlaue: 'boolean',
      required: true,
    },
  ];
  formGroup: FormGroup;
  formMaker = new InputForm(this.formsControlInit);

  get _formControls() {
    return this.formGroup.controls;
  }
  // Forms ------------->

  constructor(
    private _orderService: OrderService,
    private _authService: AuthService,
    private _router: Router,
    private _location: Location
  ) {
    this.today = this.getToday();
    // Forms ------------->

    this.formGroup = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.formGroup.setControl(item.name, this.formMaker.createControl(item));
    });

    // Forms ------------->

    // User -------------->
    this.user = this._authService._user;
  }
  ngOnInit() {
    AppComponent.isBrowser.value
      ? Utils.scrollTopWindow()
      : console.log('Not-Browser');

    this._orderService.basket$.subscribe((item) => {
      this.orderModel.orderItems = item.basketItems;
      this.orderModel.totalPrice = item.totalPrice;
      this.basket = item.basketItems;
    });
    this.formGroup.controls['discountCode'].disable();
  }
  formToOrderModel() {
    this.orderModel.accountNumber = this._formControls['accountNumber'].value;
    this.orderModel.startDate = this._formControls['startDate'].value;
    this.orderModel.acceptRules = this._formControls['acceptRules'].value;
  }
  OnChangeDate(event: any) {
    this.selectedDate = event;
  }
  changeCheckboxValue(event: boolean) {
    this.acceptRules = event;
    console.log(this.formGroup.invalid);
    debugger;

    this._formControls['acceptRules'].setValue(event);
  }
  nextSession() {
    if (this.formGroup.valid && this.secondValidation()) {
      this.formToOrderModel();
      this.session = 1;
    } else {
      console.warn('Err');
    }
  }
  getToday() {
    let day = '';
    let month = '';
    let date = new Date();
    if (date.getDate() < 10) {
      day = '0' + date.getDate();
    } else {
      day = `${date.getDate()}`;
    }
    if (date.getMonth() < 10) {
      month = '0' + date.getMonth() + 1;
    } else {
      month = `${date.getMonth() + 1}`;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }
  secondValidation() {
    if (this._formControls['acceptRules'].value == false) {
      return false;
    }
    if (this._formControls['accountNumber'].value.trim().length == 0) {
      this.formsControlInit[0].hasErr = true;
      this.deleteError();
      return false;
    } else {
      return true;
    }
  }
  deleteError() {
    setTimeout(() => {
      this.formsControlInit.forEach((it) => (it.hasErr = false));
    }, 1000);
  }

  trxCode(event: string) {
    this.orderModel.transactionCode = event;
  }
  async createOrder() {
    this.orderModel.token = this._authService._user.token;
    const res = this._orderService.post(
      'OrderNew/CreateOrder',
      this.orderModel
    );
    const data = await lastValueFrom(res);
    if (data.success) {
      this._router.navigateByUrl(`checkout/payment-result/${data.data}`);
    }
  }
  locateBack() {
    this._location.back();
  }
  timeout() {
    this.timeOut = setTimeout(() => {
      if (this.showClipboardContent) {
        this.showClipboardContent = false;
      }
    }, 5000);
  }
  deleteTimeOut() {
    clearTimeout(this.timeOut);
  }
}

// checkDate() {
//   let selectedDay = parseInt(this.selectedDate.split('-')[2])
//   let today = parseInt(this.today.split('-')[2])

// }
