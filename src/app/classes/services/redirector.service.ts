import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
const decoder = new HttpUrlEncodingCodec();
@Injectable({
  providedIn: 'root',
})
export class RedirectResolver extends BaseService<any> implements Resolve<any> {
  constructor(http: HttpClient, private _router: Router) {
    super(http);
  }

  async resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    var url = _state.url;
    // url = decoder.encodeValue(url);
    const res = this.check(url);
    const apiRes = await res;
    if (apiRes.data !== null) {
      this._router.navigateByUrl(`${apiRes.data}`);
    } else {
      url = url.split('/')[2];
      url = decoder.decodeValue(url.split('_').join(' '));
      const data = await this.getDetail(url);

      return data.data;
    }
  }
  async check(url: string) {
    const observer = this.get(`URLRedirect/CheckExists?url=${url}`).pipe(
      map((result) => {
        return result;
      })
    );
    return lastValueFrom(observer);
  }
  async getDetail(title: string) {
    const apiRes = this.get(`Article/details?title=${title}`);
    return lastValueFrom(apiRes);
  }
}
