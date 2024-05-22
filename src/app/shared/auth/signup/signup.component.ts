import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { InputForm, InputIcon, InputInterface } from 'src/app/classes/input';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ISignUp } from '../user.interface';
import { AuthService } from '../auth.service';
const formDataInit: ISignUp = {
  password: '',
  userName: '',
  accountNumber: '',
  email: '',
  firstName: '',
  id: 0,
  lastName: '',
  phoneNumber: '',
  wayKnowType: 0
};
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
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
export class SignupComponent {
  @Output('changingView') changeView: EventEmitter<boolean> =
    new EventEmitter<boolean>(false);
  loading = false;
  iconSrc = 'assets/icon/eye-off.svg';
  activeError1 : boolean;
  activeError2 : boolean;
  // <!-- ==========[نحوه آشنایی]======== -->
  
  saveType : number;
  wayKnowType : Array<any> = [
    {
      id : 0,
      label : 'گوگل',
      active : false,
      icon : 'assets/icon/chrome-icon.svg',
    },
    {
      id : 1,
      label : 'اینستاگرام',
      active : false,
      icon : 'assets/icon/ins-icon.svg',
    },
    {
      id : 2,
      label : 'تلگرام',
      active : false,
      icon : 'assets/icon/telegram-icon.svg',
    },
    {
      id : 3,
      label : 'دوستان',
      active : false,
      icon : 'assets/icon/people-icon.svg',
    },
  ];

  dropDown : boolean;

  toggleDropDown(){
    this.dropDown = !this.dropDown;
  }
  toggle(index : number){
    this.wayKnowType.filter(
      (it , i) => i !== index && it.active)
      .forEach(it => it.active = !it.active);
      this.wayKnowType[index].active = true;
      this.saveType = index;
      if(this.saveType == 3){
        debugger
        this._formcontrol['parentReferralCode'].addValidators([Validators.required,Validators.minLength(2)])
        this._formcontrol['parentReferralCode'].updateValueAndValidity({onlySelf: true})
      }   
      else {
        this._formcontrol['parentReferralCode'].removeValidators([Validators.required,Validators.minLength(2)])
        this._formcontrol['parentReferralCode'].updateValueAndValidity({onlySelf: true})

      }
  }

  formsControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'نام',
      name: 'firstName',
      typeofVlaue: 'string',
      placeholder: 'نام',
      required: true,
    },
    {
      id: 2,
      label: 'نام خانوادگی',
      name: 'lastName',
      typeofVlaue: 'string',
      required: false,
      placeholder: 'نام خانوادگی',
    },
    {
      id: 3,
      label: 'کد معرف',
      name: 'parentReferralCode',
      typeofVlaue: 'string',
      required: false,
      placeholder: 'کد معرف',
    },
    {
      id: 4,
      label: 'شماره همراه',
      name: 'phoneNumber',
      type: 'text',
      typeofVlaue: 'number',
      required: true,
      placeholder: 'شماره همراه',
      minLength: 11,
      maxLength: 11,
    },
    {
      id: 7,
      label: 'شماره حساب',
      name: 'accountNumber',
      typeofVlaue: 'string',
      required: true,
      placeholder: 'شماره حساب',
    },
    {
      id: 5,
      label: 'ایمیل',
      name: 'email',
      type: 'email',
      typeofVlaue: 'string',
      required: true,
      placeholder: 'ایمیل',
    },

    {
      id: 6,
      label: 'رمز عبور',
      name: 'password',
      type: 'password',
      typeofVlaue: 'string',
      required: true,
      minLength: 6,
      placeholder: 'رمز عبور',
      icon: [
        {
          alt: 'eye-of',
          id: 1,
          placement: 'left-icon',
          src: 'assets/icon/eye-on.svg',
        },
      ],
    },
  ];
  state: 'default' | 'rotated' = 'default';
  formMaker = new InputForm(this.formsControlInit);
  showPass: boolean = false;
  form: FormGroup;
  formControls: InputInterface[];

  constructor(private authService: AuthService) {
    this.form = new FormGroup({});
    
    this.formMaker.inputs.forEach((item) => {
      this.form.setControl(item.name, this.formMaker.createControl(item));
    });
    this.formControls = this.formMaker.inputs;
  }

  get _formcontrol() {
    return this.form.controls;
  }
  async signup() {
    this.loading = true;



    let formData = formDataInit;
    formData.wayKnowType = this.saveType;
    formData.password = this._formcontrol['password'].value;
    formData.accountNumber = this._formcontrol['accountNumber'].value;
    formData.email = this._formcontrol['email'].value;
    formData.firstName = this._formcontrol['firstName'].value;
    formData.lastName = this._formcontrol['lastName'].value;
    
    
    this._formcontrol['parentReferralCode'].value
      ? (formData.parentReferralCode =
          this._formcontrol['parentReferralCode'].value)
      : undefined;
    formData.phoneNumber = this._formcontrol['phoneNumber'].value;
    formData.userName = formData.email;
    
    if (await this.checkFormValidation(formData)) {
      if (await this.authService.signup(formData)) this.changeView.emit(true);
      else this.loading = false;
    } else {
      console.log('Not Valid');

    }
  }
  async checkFormValidation(_formData: ISignUp) {
    
    var valid = true;
    let email = _formData.email.split('@');

    if(this.saveType == null){
      this.activeError1 = true;
      valid = false
      return valid
    }
    else{
      this.activeError1 = false;
    } 

    if (this.form.valid) {
      valid = await this.checkEmail(email);
    } else {
      this.checkEmail(email);
      this.formControls.forEach((it, i) => {
        if (this._formcontrol[it.name].status == 'INVALID') {
          this.showError(i);
        }
      });
      valid = false;
    }
    

    this.deleteError();
    this.loading = false;
    return valid;
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
  async checkEmail(email: string[]) {
    var index = this.formControls.findIndex((it) => it.name == 'email');
    if (email?.length == 2) {
      if (email[1].endsWith('.com')) {
        return true;
      } else {
        this.showError(index);
        return false;
      }
    } else {
      this.showError(index);
      return false;
    }
  }
  async showError(index: number) {
    this.formControls[index].hasErr = true;
  }
  deleteError() {
    setTimeout(() => {
      this.formControls.forEach((it) => (it.hasErr = false));
    }, 1000);
  }
}
