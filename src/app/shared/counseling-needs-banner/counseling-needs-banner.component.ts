import { Component } from '@angular/core';
import { ILottieConfig } from '../lottie/lottie-config';
import { FormGroup } from '@angular/forms';
import { InputForm, InputInterface } from 'src/app/classes/input';
import { UserNeedService } from 'src/app/classes/services/user-need.service';
import { ToastrService } from 'ngx-toastr';
import { GiftInter } from 'src/app/routes/Home/components/gift-form/gift-Inter';
import { AppComponent } from 'src/app/app.component';

const formDataInit: GiftInter = {
  id: 0,
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  orderID: 0,
  isActive: true,
  userWant: 1,
};

@Component({
  selector: 'app-counseling-needs-banner',
  templateUrl: './counseling-needs-banner.component.html',
  styleUrls: ['./counseling-needs-banner.component.scss']
})

export class CounselingNeedsBannerComponent {

  lottieConfig: ILottieConfig = {
    width: '100%',
    max_w: '320px',
    height: 'auto',
    path: 'assets/lottie/banner.json',
  };
  lottieConfig2: ILottieConfig = {
    width: '100%',
    max_w: '320px',
    height: 'auto',
    path: 'assets/lottie/click-here.json',
  };

  formControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'نام',
      name: 'firstName',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'نام',
      required: true,
      hasErr: false,
      height:2.5,
      width:0
    },

    {
      id: 3,
      label: 'نام خانوادگی',
      name: 'lastName',
      typeofVlaue: 'string',
      class: 'input-with-icon',
      required: true,
      placeholder: 'نام خانوادگی',
      hasErr: false,
      height:2.5,
      width:0
    },
    {
      id: 2,
      label: 'شماره تماس',
      name: 'phoneNumber',
      type: 'pattern',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'شماره تماس',
      required: true,
      hasErr: false,
      height:2.5,
      width:0
    },

    {
      id: 4,
      label: 'email',
      name: 'Email',
      type: 'email',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'ایمیل',
      required: true,
      hasErr: false,
      height:2.5,
      width:0
    },
  ];
  formControls!: InputInterface[];
  form: FormGroup;
  formMaker = new InputForm(this.formControlInit);
  // =====[انیمیشن]====
  animation = false;
  activeAnimation(){
    this.animation =true;
  }
  deactivateAnimation(){
    this.animation =false;
  }

  constructor(
    private giftFormService: UserNeedService,
    private toaster: ToastrService
  ) {
    this.form = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.form.setControl(item.name, this.formMaker.createControl(item));
    });
    this.formControls = this.formMaker.inputs;
  }
  
  loading = false;

  ngOnInit() {
    if (AppComponent.isBrowser.value){
      this.loading = true;
    }
  }

  get _firstName(): string {
    return this.form.controls['firstName'].value;
  }
  get _lastName(): string {
    return this.form.controls['lastName'].value;
  }
  get _phoneNumber(): string {
    return this.form.controls['phoneNumber'].value;
  }
  get _Email(): string {
    return this.form.controls['Email'].value;
  }

  async consultationServices() {
    let formData = formDataInit;
    formData.firstName = this._firstName;
    formData.lastName = this._lastName;
    formData.phoneNumber = this._phoneNumber;
    formData.email = this._Email;
    if (await this.checkFormValidation(formData)) {
      const res = await this.giftFormService.consultation_req(formData);
      this.formControls.forEach((x) => {
        const mytest = document.getElementById(x.name) as HTMLInputElement;
        if (mytest) {
          mytest.value = '';
        }
      });
      if (res) this.giftFormService.toastSuccess('با موفقیت ارسال شد');
      else this.giftFormService.toastError('خطا در انحجام عملیات');
    } else {
      this.formControls[0].name = '';
      this.toaster.error('خطا در فرم درخواست!!!');
      console.log('Not Valid');
    }
  }

  async checkFormValidation(_formData: GiftInter) {
    const formErrors: { [key: string]: string[] } = {};
    for (const controlName in this.form.controls) {
      const control = this.form.controls[controlName];

      if (control.invalid) {
        formErrors[controlName] = [];

        if (control.errors!['required']) {
          formErrors[controlName].push(`${controlName} is required.`);
        }

        if (control.errors!['email']) {
          formErrors[controlName].push(`Invalid ${controlName} format.`);
        }

        if (control.errors!['pattern']) {
          formErrors[controlName].push(
            `${controlName} must be a valid number.`
          );
        }

        if (control.errors!['min']) {
          formErrors[controlName].push(`You must be at least 18 years old.`);
        }
      }
    }
    // console.log(formErrors);
    let erorrKeyName = Object.keys(formErrors);
    this.formControlInit.forEach((x) => {
      if (erorrKeyName.indexOf(x.name) > -1) {
        x.hasErr = true;
      }
      setInterval(() => {
        x.hasErr = false;
      }, 10000);
    });

    if (Object.keys(formErrors).length > 0) {
      return false;
    } else {
      return true;
    }
    // You Can Add Any Validation Here
    // But now We don't need any
  }

}
