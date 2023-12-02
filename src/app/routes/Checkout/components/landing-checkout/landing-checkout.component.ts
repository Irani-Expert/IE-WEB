import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Input, InputInterface } from 'src/app/classes/input';
import { User } from 'src/app/shared/auth/user.interface';
interface PaymentMethod {
  id: number;
  title: string;
  cap?: string;
  img: string;
  imgAlt: string;
  active: boolean;
  disabled: boolean;
}
// import { Order } from '../../interfaces/order.interface';
// const formDataInit: Order = new Order()
@Component({
  selector: 'app-landing-checkout',
  templateUrl: './landing-checkout.component.html',
  styleUrls: ['./landing-checkout.component.scss'],
})
export class LandingCheckoutComponent {
  session: 0 | 1 = 1; // Form Details == 0 // TX ID AND FINAL SUBMIT == 1
  selectedPaymentMethod: PaymentMethod;
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
  isShowDialog = false;
  user: User = {
    firstName: 'Amin',
    lastName: 'Beygi',
    id: 54,
    token: '',
    username: 'punisher@gmail.com',
  };
  formsControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'شماره حساب',
      name: 'accountNumber',
      typeofVlaue: 'string',
      placeholder: 'شماره حساب متاتریدر 5 خود را وارد کنید',
      required: true,
      icon: [
        {
          alt: 'info',
          id: 1,
          placement: 'left-icon',
          src: 'assets/icon/email.svg',
        },
      ],
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
  ];
  formGroup: FormGroup;
  formMaker = new Input(this.formsControlInit);
  constructor() {
    this.formGroup = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.formGroup.setControl(item.name, this.formMaker.createControl(item));
    });
  }
  ngOnInit() {
    this.selectedPaymentMethod = this.paymentMethods[0];
  }
  get _formControls() {
    return this.formGroup.controls;
  }
  showDialog(event: boolean) {
    this.isShowDialog = event;
  }
  changePaymentMethod(item: PaymentMethod) {
    if (this.selectedPaymentMethod == item || item.disabled) {
      return;
    } else {
      this.paymentMethods.forEach((it) => (it.active = false));
      item.active = true;
      this.selectedPaymentMethod = item;
    }
  }
}
