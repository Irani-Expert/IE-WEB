import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ILogin } from '../user.interface';
const formDataInit: ILogin = { password: '', username: '' };
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      username: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get _userName(): string {
    return this.form.controls['username'].value;
  }
  get _password(): string {
    return this.form.controls['password'].value;
  }
  async ngOnInit() {}
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
}
