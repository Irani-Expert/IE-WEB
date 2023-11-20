import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { Input, InputInterface } from 'src/app/classes/input';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';
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
  // The Code Client Receive from API
  codeTOSend: number = 0;
  // this ID will fill after response is success
  idFromApi: number = -1;
  formControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'ایمیل',
      name: 'email',
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
  formMaker = new Input(this.formControlInit);
  form: FormGroup;
  formControls: InputInterface[];
  codeValidation: boolean = false;
  @ViewChild(NgOtpInputComponent, { static: false })
  ngOtpInput: NgOtpInputComponent;
  otpConfig: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
  };
  loading: boolean = false;
  session: number = Session.SendReq;
  btnText: 'دریافت کد' | 'دریافت رمز عبور جدید' = 'دریافت کد';
  @Output('changePassword') changePassword: EventEmitter<boolean> =
    new EventEmitter<boolean>(false);
  constructor(private authService: AuthService) {
    this.form = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.form.setControl(item.name, this.formMaker.createControl(item));
    });
    this.formControls = this.formMaker.inputs;
  }
  get _email(): string {
    return this.form.controls['email'].value;
  }
  get _phoneNumber(): string {
    return this.form.controls['phoneNumber'].value;
  }
  sendReq(sessionToGo: number) {
    if (sessionToGo == Session.SendReq) {
      this.loading = true;
      this.getTheCode();
    }
    if (sessionToGo == Session.ReceiveNewPass) {
      this.loading = true;
      this.receiveNewPass();
    }
  }
  onOtpChange(event: string) {
    if (event.length == 4) {
      this.codeTOSend = parseInt(event);
      this.codeValidation = true;
    } else this.codeValidation = false;
  }
  toggleDisable() {
    if (this.ngOtpInput.otpForm) {
      if (this.ngOtpInput.otpForm.disabled) {
        this.ngOtpInput.otpForm.enable();
      } else {
        this.ngOtpInput.otpForm.disable();
      }
    }
  }
  async getTheCode() {
    let data = {
      email: this._email,
      phoneNumber: this._phoneNumber,
    };
    let res = await this.authService.forgetPass(data);
    if (res[0]) {
      this.session = Session.ReceiveNewPass;
      this.form.disable();
      this.btnText = 'دریافت رمز عبور جدید';
      typeof res[1] == 'number'
        ? (this.idFromApi = res[1])
        : (this.idFromApi = -1);
      console.log(this.idFromApi);
    }
    this.loading = false;
  }
  async receiveNewPass() {
    let data = {
      id: this.idFromApi,
      code: this.codeTOSend,
    };
    if (await this.authService.setPassword(data)) {
      setTimeout(() => {
        this.changePassword.emit(true);
      }, 10000);
    }
  }
  getBackToLogin() {
    this.changePassword.emit(false);
  }
}
