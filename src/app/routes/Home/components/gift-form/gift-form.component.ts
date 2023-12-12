import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Input, InputInterface } from 'src/app/classes/input';
import { GiftInter } from './gift-Inter';
// import { UserNeedService } from 'src/app/classes/services/user-need.service';
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
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.scss'],
})
export class GiftFormComponent {
  formControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'نام',
      name: 'firstName',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'نام',
      required: true,
    },
    {
      id: 2,
      label: 'شماره تماس',
      name: 'phoneNumber',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'شماره تماس',
      required: true,
    },
    {
      id: 3,
      label: 'نام خانوادگی',
      name: 'lastName',
      typeofVlaue: 'string',
      class: 'input-with-icon',
      required: true,
      placeholder: 'نام خانوادگی',
    },

    {
      id: 4,
      label: 'email',
      name: 'Email',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'ایمیل',
      required: true,
    },
  ];
  formControls!: InputInterface[];
  form: FormGroup;

  formMaker = new Input(this.formControlInit);
  //private giftFormService: UserNeedService
  constructor() {
    this.form = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.form.setControl(item.name, this.formMaker.createControl(item));
    });
    this.formControls = this.formMaker.inputs;
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
  async login() {
    let formData = formDataInit;
    formData.firstName = this._firstName;
    formData.lastName = this._lastName;
    formData.phoneNumber = this._phoneNumber;
    formData.email = this._Email;
    if (await this.checkFormValidation(formData)) {
      // this.giftFormService.gift_req(formData);
    } else {
      console.log('Not Valid');
    }
  }
  async checkFormValidation(_formData: GiftInter) {
    // You Can Add Any Validation Here
    // But now We don't need any
    return true;
  }
}
