import { Injectable } from '@angular/core';
import { IForgetPassword, ILogin, ISignUp, User } from './user.interface';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { BaseService } from 'src/app/classes/services/base.service';
import { HttpClient } from '@angular/common/http';
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
  userSubject = new BehaviorSubject<User>(userInit);
  constructor(http: HttpClient) {
    super(http);
  }
  public get _user() {
    return this.userSubject.value;
  }
  async login(formData: ILogin) {
    const result = this.post('Auth/sign-in', formData).pipe(
      map((res) => {
        if (res.success) {
          if (res.data instanceof User) this.userSubject.next(res.data);
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
}
