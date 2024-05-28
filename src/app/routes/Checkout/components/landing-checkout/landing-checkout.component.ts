import { Component, ViewChild } from '@angular/core';
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
import { LocalStorageService } from 'src/app/classes/local-storage';
import { CheckoutDetailCardComponent } from '../checkout-detail-card/checkout-detail-card.component';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { Checkbox } from 'src/app/shared/checkbox/checkbox.component';
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
  @ViewChild(CheckoutDetailCardComponent)
  appCheckoutDetail: CheckoutDetailCardComponent;
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
      id: 4,
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
  loadDetailSection = false;
  constructor(
    private modal: ModalService,
    private _orderService: OrderService,
    private _authService: AuthService,
    private _router: Router,
    private _location: Location,
    private _localStorage: LocalStorageService
  ) {
    if (this._orderService.basket.value.basketItems.length == 0) {
      let basket = this._localStorage.getItem('user_basket');
      this._orderService.basket.next(JSON.parse(basket!));
    }
    this.today = this.getToday();
    // Forms ------------->

    this.formGroup = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.formGroup.setControl(item.name, this.formMaker.createControl(item));
    });

    // Forms ------------->

    // User -------------->
  }
  ngOnInit() {
    AppComponent.isBrowser.value
      ? Utils.scrollTopWindow()
      : console.log('Not-Browser');

    // const userBasket = JSON.parse(this._localStorage.getItem('user_basket')!);
    // if (userBasket) {
    //   this.orderModel = { ...userBasket };
    //   this.basket = { ...userBasket.basketItems };
    // } else {
    // this._orderService.basket$.subscribe((item) => {
    //   this.orderModel.orderItems = item.basketItems;
    //   this.orderModel.totalPrice = item.totalPrice;
    //   this.basket = item.basketItems;
    //   // this._localStorage.setItem(
    //   //   'user_basket',
    //   //   JSON.stringify(this.orderModel)
    //   // );
    // });
    // }
    let orderBasket = this._orderService.basket.value;
    this.orderModel.orderItems = orderBasket.basketItems;
    this.orderModel.totalPrice = orderBasket.totalPrice;
    this.basket = orderBasket.basketItems;

    // this.formGroup.controls['discountCode'].disable();
  }

  ngAfterViewInit() {
    let subscription = this._authService.userSubject.asObservable();
    subscription.subscribe({
      next: (it: User) => {
        this.user = it;
      },
    });
    this.loadDetailSection = true;
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
  investMentCode(event: string) {
    this.orderModel.investorPassword = event;
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

  ngOnDestroy() {
    clearTimeout(this.timeOut);
  }

  get imageUrl() {
    let contentUrl = this.appCheckoutDetail?.contentUrl;
    let url = this.appCheckoutDetail?.data?.cardImagePath;
    if (url) return contentUrl + url;
    else return '';
  }

  // Discount

  async checkDiscount() {
    const code = this._formControls['discountCode'].value;
    const res = await this._orderService.checkDiscount(
      code,
      this.orderModel.orderItems
    );
    if (res.success) {
      const { amount, percent } = res.data!;
      if (percent !== 0) {
        this.calculatePercent(percent);
      } else {
        this.calculateAmount(amount);
      }
      this.orderModel.discountCode = code;
      this.formGroup.controls['discountCode'].disable();
    } else {
      console.info('ERR!');

      // this._orderService.toastError(res.message);
    }
  }

  calculateAmount(amount: number) {
    this._orderService.basket.value.totalPrice -= amount;
    this.appCheckoutDetail.discount = true;
    this.appCheckoutDetail.discountPercent =
      (amount * 100) / this.orderModel.totalPrice;
  }

  calculatePercent(percent: number) {
    let discountPrice = (percent * this.orderModel.totalPrice) / 100;

    this._orderService.basket.value.totalPrice -= discountPrice;
    this.appCheckoutDetail.discount = true;
    this.appCheckoutDetail.discountPercent = percent;
  }

  get price() {
    return this._orderService.basket.value.totalPrice;
  }

  @ViewChild(Checkbox) checkboxComp: Checkbox;
  modalStatus = false;
  rulesModal() {
    this.modalStatus = true;
    this.modal.open().subscribe({
      next: (action) => {
        if (action == 'confirm') {
          this.checkboxComp.inputStatus(true);
        }
      },
      complete: () => {
        this.modalStatus = false;
      },
    });
  }
  submitModal() {
    this.modal.submitModal();
  }
}

// checkDate() {
//   let selectedDay = parseInt(this.selectedDate.split('-')[2])
//   let today = parseInt(this.today.split('-')[2])

// }
