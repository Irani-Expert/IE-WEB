import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AppComponent } from '../app.component';
// import { finalize } from 'rxjs';
// import { AuthService } from '../shared/auth/auth.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private loadingDismissers = [
    'GetActualValByID',
    'AspNetUserClaim',
    'CurrencyPairTransaction',
  ];

  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.dismissLoader(req.url)) {
      return next.handle(req);
    }
    AppComponent.loaderSubject.next(true);
    return next
      .handle(req)
      .pipe(finalize(() => AppComponent.loaderSubject.next(false)));
  }

  dismissLoader(url: string) {
    let result = false;
    this.loadingDismissers.forEach((it) => {
      if (url.includes(it)) {
        result = true;
        return;
      }
    });
    return result;
  }
}
