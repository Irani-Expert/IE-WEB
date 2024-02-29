import { Injectable } from '@angular/core';
import { IForgetPassword, ILogin, ISignUp, User } from './user.interface';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { BaseService } from 'src/app/classes/services/base.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/classes/local-storage';
import { ModalService } from '../modal/services/modal.service';
import { ToastrService } from 'ngx-toastr';
const userInit: User = {
  firstName: '',
  lastName: '',
  token: '',
  username: '',
  id: 0,
};
@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<User | ILogin | IForgetPassword> {
  static loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userSubject = new BehaviorSubject<User>(userInit);
  constructor(
    http: HttpClient,
    private localStorage: LocalStorageService,
    private modal: ModalService,
    toastr: ToastrService
  ) {
    super(http, toastr);
  }
  public get _user() {
    return this.userSubject.value;
  }
  async login(formData: ILogin, remember: boolean) {
    const result = this.post('Auth/sign-in', formData).pipe(
      map((res) => {
        if (res.success) {
          if (remember) this.rememberUser(res.data);
          else this.saveForOneSession(res.data);
          this.toastSuccess(res.message, 'ورود موفق', 'toast-signed-in');
          this.modal.closeModal();
        } else {
          this.toastError(res.message);
        }
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
  async signup(formData: ISignUp) {
    const result = this.post('Auth/sign-up', formData).pipe(
      map((res) => {
        if (res.success) {
          this.toastSuccess(res.message, 'ثبت نام موفق');
        } else {
          this.toastError(res.message);
        }
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
  async forgetPass(formData: IForgetPassword) {
    var idFromApi = 0;
    const result = this.post('Auth/forgot-password', formData).pipe(
      map((res) => {
        if (typeof res.data == 'number') idFromApi = res.data;
        if (res.success == false) {
          this.toastError(res.message);
        }
        return [res.success, idFromApi];
      })
    );
    return await lastValueFrom(result);
  }
  async setPassword(formData: IForgetPassword) {
    const result = this.post('Auth/set-password', formData).pipe(
      map((res) => {
        if (res.success) {
          this.toastSuccess(res.message);
        } else {
          this.toastError(res.message);
        }
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
  saveForOneSession(data: any) {
    let user: User = {
      id: data.id,
      username: data.subject,
      firstName: data.firstName,
      lastName: data.lastName,
      token: data.token,
    };
    this.userSubject.next(user);
    AuthService.loggedIn.next(true);
  }
  rememberUser(data: any) {
    let info: User = {
      id: data.userID,
      username: data.subject,
      firstName: data.firstName,
      lastName: data.lastName,
      token: data.token,
    };

    let token = data.token;
    this.localStorage.setItem('info', JSON.stringify(info));
    this.localStorage.setItem('token', token);
    this.userSubject.next(info);

    AuthService.loggedIn.next(true);
  }
  logOutUser() {
    AuthService.loggedIn.next(false);
    this.userSubject.next(userInit);
    this.localStorage.removeItem('info');
    this.localStorage.removeItem('token');
  }
  async checkValidToken() {
    const token = this.localStorage.getItem('token');
    if (token) {
      const checkResult = this.post(
        `Auth/check-user-permission?token=${token}`,
        undefined
      ).pipe(
        map((data) => {
          return [data.success, data.data];
        })
      );
      return await lastValueFrom(checkResult);
    } else {
      return [false];
    }
  }
  override toastSuccess(
    message: string,
    title: string = 'موفق',
    toastClass: string = 'toast-success'
  ): void {
    this.toastrService.show(message, title, {
      closeButton: true,
      progressBar: true,
      timeOut: 2000,
      positionClass: 'toast-top-left',
      toastClass: `ngx-toastr ${toastClass}`,
    });
  }
}
