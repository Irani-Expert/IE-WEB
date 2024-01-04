import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';
import { UserNeed } from '../interfaces/user-need';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserNeedService extends BaseService<UserNeed | unknown> {
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }
  // async gift_req(formData: GiftInter) {
  //   const result = this.post('UserNeed', formData).pipe(
  //     map((res) => {
  //       return res.success;
  //     })
  //   );
  //   return await lastValueFrom(result);
  // }
  async consultation_req(formData: UserNeed) {
    const result = this.post('UserNeed', formData).pipe(
      map((res) => {
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
}
