import { Component, EventEmitter, Output } from '@angular/core';
import { InputInterface } from 'src/app/classes/input';
enum Session {
  SendReq,
  ReceiveNewPass,
}
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  loading: boolean = false;
  session: number = Session.SendReq;
  btnText: 'دریافت کد' | 'دریافت رمز عبور جدید' = 'دریافت کد';
  @Output('changePassword') changePassword: EventEmitter<boolean> =
    new EventEmitter<boolean>(false);

  formControl: InputInterface[] = [
    {
      id: 1,
      label: 'ایمیل',
      name: 'username',
      type: 'email',
      typeofVlaue: 'string',
      placeholder: 'ایمیل',
      required: true,
    },
    {
      id: 2,
      label: 'شماره تماس',
      name: 'phoneNumber',
      typeofVlaue: 'string',
      placeholder: 'شماره تماس',
      required: true,
    },
  ];
  sendReq(sessionToGo: number) {
    if (sessionToGo == Session.SendReq) {
      this.loading = true;
      setTimeout(() => {
        this.btnText = 'دریافت رمز عبور جدید';
        this.session = Session.ReceiveNewPass;
        this.loading = false;
      }, 1500);
    }
    if (sessionToGo == Session.ReceiveNewPass) {
      this.loading = true;
      setTimeout(() => {
        this.btnText = 'دریافت کد';
        this.loading = false;
      }, 1500);
    }
  }
}
