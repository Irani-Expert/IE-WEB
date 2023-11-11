import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ILogin } from '../user.interface';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Input, InputIcon, InputInterface } from 'src/app/classes/input';
const formDataInit: ILogin = { password: '', username: '' };
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateX(0) rotateZ(0)' })),
      state('rotated', style({ transform: 'rotateX(90deg) rotateZ(180deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in')),
    ]),
  ],
})
export class LoginComponent {
  @Output('changePassword') changePassword: EventEmitter<boolean> =
    new EventEmitter<boolean>(false);
  formControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'نام کاربری',
      name: 'username',
      type: 'email',
      class: 'input-with-icon',
      typeofVlaue: 'string',
      icon: [
        {
          id: 1,
          placement: 'right-icon',
          src: 'assets/images/email.svg',
          alt: 'email-icon',
        },
      ],
      placeholder: 'IraniExpert@gmail.com',
      required: true,
    },
    {
      id: 2,
      label: 'پسوورد',
      name: 'password',
      type: 'password',
      typeofVlaue: 'string',
      class: 'input-with-icon',
      required: true,
      minLength: 6,
      icon: [
        {
          id: 1,
          placement: 'right-icon',
          src: 'assets/images/key.svg',
          alt: 'email-icon',
        },
        {
          id: 2,
          placement: 'left-icon',
          src: 'assets/images/eye-on.svg',
          alt: 'eye-opened',
        },
      ],
      placeholder: '*******',
    },
  ];
  formMaker = new Input(this.formControlInit);

  iconSrc = '../../../../assets/images/email.svg';
  state: 'default' | 'rotated' = 'default';
  showPass: boolean = false;
  form: FormGroup;
  formControls: InputInterface[];
  rememberMe: boolean = false;
  constructor(private authService: AuthService) {
    this.form = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.form.setControl(item.name, this.formMaker.createControl(item));
    });
    this.formControls = this.formMaker.inputs;
  }

  get _userName(): string {
    return this.form.controls['username'].value;
  }
  get _password(): string {
    return this.form.controls['password'].value;
  }
  async login() {
    let formData = formDataInit;
    formData.password = this._password;
    formData.username = this._userName;
    if (await this.checkFormValidation(formData)) {
      this.authService.login(formData);
    } else {
      console.log('Not Valid');
    }
  }
  async checkFormValidation(_formData: ILogin) {
    // You Can Add Any Validation Here
    // But now We don't need any
    return true;
  }

  showPassClick(item: InputIcon, index: number) {
    this.state = this.state === 'default' ? 'rotated' : 'default';
    setTimeout(() => {
      if (item.placement == 'left-icon') {
        this.formControls[index].type =
          this.formControls[index].type === 'password' ? 'text' : 'password';
        let x = item.src!;
        item.src = this.iconSrc;
        this.iconSrc = x;
        this.state = this.state === 'default' ? 'rotated' : 'default';
      }
    }, 200);
  }
  // closeModal(){

  // }
  forgetPass() {
    this.changePassword.emit(true);
  }
}
