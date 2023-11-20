import { Injectable } from '@angular/core';
import { IForgetPassword, ILogin, ISignUp, User } from './user.interface';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { BaseService } from 'src/app/classes/services/base.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/classes/local-storage';
import { ModalService } from '../modal/services/modal.service';
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
    private modal: ModalService
  ) {
    super(http);
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

          this.modal.closeModal();
        }
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
  async signup(formData: ISignUp) {
    const result = this.post('Auth/sign-up', formData).pipe(
      map((res) => {
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
        return [res.success, idFromApi];
      })
    );
    return await lastValueFrom(result);
  }
  async setPassword(formData: IForgetPassword) {
    const result = this.post('Auth/set-password', formData).pipe(
      map((res) => {
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
  saveForOneSession(data: any) {
    let user: User = {
      id: data.id,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      token: data.token,
      favourites: data.favourites,
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
      favourites: data.favourites,
    };
    let favorites = data.favourites;
    let token = data.token;
    this.localStorage.setItem('info', JSON.stringify(info));
    this.localStorage.setItem('token', token);
    this.localStorage.setItem('favorites', JSON.stringify(favorites));
    this.userSubject.next(info);
    AuthService.loggedIn.next(true);
  }
  logOutUser() {
    AuthService.loggedIn.next(false);
    this.userSubject.next(userInit);
    this.localStorage.removeItem('info');
    this.localStorage.removeItem('token');
    this.localStorage.removeItem('favorites');
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
}
