import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { GiftInter } from 'src/app/routes/Home/components/gift-form/gift-Inter';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserNeedService extends BaseService<GiftInter | unknown> {
  constructor(http: HttpClient) {
    super(http);
  }
  async gift_req(formData: GiftInter) {
    const result = this.post('UserNeed', formData).pipe(
      map((res) => {
        return res.success;
      })
    );
    return await lastValueFrom(result);
  }
}
